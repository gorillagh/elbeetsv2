import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { z } from "zod";
import bcrypt from "bcrypt";
import User from "@/app/models/User";
import dbConnect from "./dbConnects";
import { unstable_noStore as noStore } from "next/cache";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

async function getUser(email) {
  await dbConnect();
  try {
    const user = await User.findOne({ email }).exec();
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  // session:{
  //   strategy: "jwt"
  // },
  providers: [
    Google({
      // find the user in the database and set it to the google user
      async profile(profile) {
        await dbConnect();
        let existingUser = await getUser(profile.email);
        if (!existingUser) {
          existingUser = new User({
            googleId: profile.sub,
            name: profile.name,
            email: profile.email,
            email_verified: profile.email_verified,
            picture: profile.picture,
          });
          await existingUser.save();
        } else if (!existingUser.googleId) {
          existingUser.googleId = profile.sub;
          await existingUser.save();
        }
        console.log("Existing--->", existingUser);
        return {
          _id: existingUser._id,
          name: existingUser.name,
          email: existingUser.email,
          email_verified: existingUser.email_verified,
          picture: existingUser.picture,
          roles: existingUser.roles,
        };
      },
    }),
    Credentials({
      // credentials:{email:{}, password:{}, },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);
          if (!user) return null;
          if (!user?.password) return null;
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("user---->", user);
      console.log("account---->", account);
      console.log("Profile---->", profile);
      if (account.provider === "google") {
        const existingUser = await getUser(user.email);
        if (!existingUser) {
          await new User({
            googleId: user.id,
            name: user.name,
            email: user.email,
            email_verified: profile.email_verified,
            picture: user.image,
          }).save();
          // return true;
        }
        if (existingUser.googleId && existingUser.googleId === user.id)
          return true;
        if (existingUser.password)
          return `/login?errorMessage=Use the password that was used to register ${user.email}.`;
      }
      return true;
    },

    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    //   if (url.startsWith("/")) return `${baseUrl}${url}`;
    //   // Allows callback URLs on the same origin
    //   else if (new URL(url).origin === baseUrl) return url;
    //   return baseUrl;
    // },
    ...authConfig.callbacks,
  },
});

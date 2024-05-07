"use server";
import { z } from "zod";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/auth";
import dbConnect from "@/dbConnects";
import User from "../models/User";
import { hashPassword } from "./utils";

const UserSchema = z.object({
  userName: z
    .string()
    .min(2, { message: "Username must be at least 2 characters long" })
    .max(50, { message: "Username cannot exceed 50 characters" }),
  email: z.string().email({ message: "Enter a valid email" }),
  phoneNumber: z
    .string()
    .regex(/^\+(?:[0-9] ?){6,14}[0-9]$/, {
      message: "Enter a valid phone number",
    })
    .max(15, { message: "Phone number cannot exceed 15 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .regex(/^(?=.*[A-Z])(?=.*[0-9])/i, {
      message:
        "Password must contain at least one capital letter and one number",
    }),
});

// Authenticate and sign in user
export async function authenticate(prevState, formData) {
  const { email, password, callbackUrl } = Object.fromEntries(formData);
  try {
    const data = await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl,
    });
    return { success: true, data };
  } catch (error) {
    console.log("auth error ---->", error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { errorMessage: "Invalid credentials." };
        default:
          return { errorMessage: "Something went wrong." };
      }
    }
    throw error;
  }
}

export async function signInWithGoogle(callbackUrl) {
  // try {
  await signIn("google", { redirectTo: callbackUrl });
  // } catch (error) {
  //   console.log("google login error--->", error.message);
  //   throw error;
  // }
}

// Register User
const RegisterUser = UserSchema.omit({ phoneNumber: true });

export async function registerUser(prevState, formData) {
  // Validate fields with zord
  const validatedFields = RegisterUser.safeParse({
    email: formData.get("email"),
    userName: formData.get("userName"),
    password: formData.get("password"),
  });
  // If form validation fails, returns errors early. Otherwise, continue
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields. Failed to Send Message",
    };
  }

  await dbConnect();

  const { userName, email, password } = validatedFields.data;

  try {
    await new User({
      name: userName,
      email,
      password: await hashPassword(password),
    }).save();
    return {
      response: { success: true, message: "User created successfully" },
    };
  } catch (error) {
    console.log("Registration error---->", error.errors.email.message);
    if (error.name === "ValidationError" && error.errors?.email) {
      return { error: `Email ${error.errors.email.message}` };
    }

    return { error: error.message };
  }
  // redirect("/register/complete");
}

export async function logout() {
  "use server";
  await signOut({
    redirectTo: "/login",
  });
}

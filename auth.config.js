export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.email_verified = user.email_verified;
        token.roles = user.roles;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token.id;
        session.user.email_verified = token.email_verified;
        session.user.roles = token.roles;
      }
      return session;
    },
    async authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;
      const isLoginPage = pathname.startsWith("/login");
      const isRegisterPage = pathname.startsWith("/register");
      const isUserPage = pathname.startsWith("/user");
      const isAdminPage = pathname.startsWith("/admin");

      if ((isLoginPage || isRegisterPage) && isLoggedIn) {
        return Response.redirect(new URL("/user/dashboard", nextUrl));
      } else if ((isUserPage || isAdminPage) && !isLoggedIn) {
        return false;
      } else if (
        isLoggedIn &&
        isAdminPage &&
        !auth.user?.roles?.includes("admin")
      ) {
        return Response.redirect(new URL("/user/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
};

import "@/app/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

import { Toaster } from "react-hot-toast";
import SessionProvider from "@/SessionProvider";
import { auth } from "@/auth";

export const metadata = {
  title: {
    template: "%s | Elbee-TS - Admin",
    default: "Elbee-TS - Admin",
  },
  description:
    "Transcription, Captioning and Translation Website, admin dashboard",
};

export default async function RootLayout({ order, children }) {
  const session = await auth();
  session?.user && console.log(session.user);

  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </head>
      <body>
        <SessionProvider session={session && session}>
          <AppRouterCacheProvider options={{ key: "mui" }}>
            <ThemeProvider theme={theme}>
              <Toaster position="top-center" />
              {children}
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

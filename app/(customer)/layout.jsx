import "../globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";
import MainNav from "../components/Navbars/MainNav";
import MainFooter from "../components/Footers/MainFooter";
import { Toaster } from "react-hot-toast";
import SessionProvider from "@/SessionProvider";
import { auth } from "@/auth";

export const metadata = {
  title: {
    template: "%s | Elbee-TS",
    default: "Elbee-TS",
  },
  description: "Transcription, Captioning and Translation Website",
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
              <MainNav session={session} />
              {/* {order} */}
              {children}
              <MainFooter />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </SessionProvider>
      </body>
    </html>
  );
}

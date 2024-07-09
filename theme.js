"use client";
import { Roboto, Poppins, Inter, Montserrat, Ubuntu } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0066EE",
      light: "#4089ea",
      dark: "#1354ab",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ce4853",
      main: "#bf1f2c",
      dark: "#8c262e",
      contrastText: "#fff",
    },
    error: {
      main: "#ce0018",
      light: "#ff0220",
      dark: "#a50013",
      contrastText: "#fff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#fff",
    },
    info: {
      main: "#784af4",
      light: "#b095f9",
      dark: "#4c0ff0",
      contrastText: "#fff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.5)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    background: {
      colored: "#C0DAFA",
      paper: "#FFF",
      default: "#FFF",
    },

    divider: "rgba(0, 0, 0, 0.1)",
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: poppins.style.fontFamily,
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          bigTitle: "h1",
          sectionHeader: "h2",
          subheading: "h3",
          subSubheading: "h4",
          bodyText1: "p",
          bodyText2: "p",
          caption: "p",
        },
      },
    },
  },
});

(theme.typography.bodyText1 = {
  fontSize: "1rem",
  fontFamily: montserrat.style.fontFamily,

  fontWeight: 600,
  color: "#424242",
  lineHeight: 1.5,
  letterSpacing: "0.00938em",
}),
  (theme.typography.bigTitle = {
    fontSize: "2.5rem",
    fontFamily: poppins.style.fontFamily,
    fontWeight: 900,
    color: "#323232",
    lineHeight: 1.167,
    letterSpacing: "-0.01562em",
    // textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",

    [theme.breakpoints.up("md")]: {
      fontSize: "4rem",
    },
  });

theme.typography.sectionHeader = {
  fontSize: "2rem",
  fontFamily: poppins.style.fontFamily,

  fontWeight: 800,
  color: "#323232",
  lineHeight: 1.2,
  letterSpacing: "-0.00833em",
  // textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.up("md")]: {
    fontSize: "2.75rem",
  },
};

theme.typography.subheading = {
  fontSize: "1.5rem",
  fontFamily: poppins.style.fontFamily,

  fontWeight: 700,
  color: "#333",
  lineHeight: 1.167,
  letterSpacing: "0em",
  // textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

theme.typography.subSubheading = {
  fontSize: "1.1rem",
  fontFamily: montserrat.style.fontFamily,
  fontWeight: 600,
  color: "#333",
  lineHeight: 1.235,
  letterSpacing: "0.00735em",
  // textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
  },
};

(theme.typography.bodyText2 = {
  fontSize: "0.875rem",
  fontFamily: montserrat.style.fontFamily,
  fontWeight: 500,
  color: "#424242",
  lineHeight: 1.43,
  letterSpacing: "0.01071em",
}),
  (theme.typography.button = {
    fontFamily: poppins.style.fontFamily,

    fontWeight: 700,
    fontSize: "1rem",
    lineHeight: 1.75,
    letterSpacing: "0.08em",
    textTransform: "capitalize",
  }),
  (theme.typography.link = {
    fontFamily: poppins.style.fontFamily,

    fontWeight: 700,
    fontSize: "1rem",
    color: "#bf1f2c",
    lineHeight: 1.75,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
  }),
  (theme.typography.caption = {
    fontFamily: poppins.style.fontFamily,
    fontWeight: 500,
    fontSize: "0.8rem",
    color: "#424242",
    lineHeight: 1.66,
    letterSpacing: "0.03333em",
  });

export default theme;

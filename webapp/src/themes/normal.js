import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Cyber theme (light mode variant) — dark background with neon green accents
const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#00ff9c", // neon green accent
      light: "#66ffc4",
      dark: "#00cc7d",
      contrastText: "#00140e",
    },
    secondary: {
      main: "#0a0f0a", // app bar / surfaces
      contrastText: "#ccffd8",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#0b0f0c", // page background
      paper: "#0f1511", // cards/surfaces
    },
    titleBar: {
      main: "#0a0f0a",
      contrastText: "#ccffd8",
    },
  },
  typography: {
    fontFamily: ["JetBrains Mono", "Roboto", "Arial", "sans-serif"].join(","),
    button: {
      fontFamily: ["JetBrains Mono", "Roboto", "Arial", "sans-serif"].join(","),
      textTransform: "none",
    },
  },
  overrides: {
    MuiAppBar: {
      colorSecondary: {
        backgroundColor: "#0a0f0a",
        color: "#ccffd8",
      },
    },
  },
});

export default theme;

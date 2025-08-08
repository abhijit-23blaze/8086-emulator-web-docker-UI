import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Cyber theme (dark mode) — black with deep green and neon accents
const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#39ff14", // neon green
      light: "#6bff51",
      dark: "#00cc0a",
      contrastText: "#031b0a",
    },
    secondary: {
      main: "#0a0a0a",
      contrastText: "#c8facc",
    },
    background: {
      paper: "#0f0f10",
      default: "#050607",
    },
    error: {
      main: red.A400,
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
        backgroundColor: "#0a0a0a",
        color: "#c8facc",
      },
    },
  },
});

export default theme;

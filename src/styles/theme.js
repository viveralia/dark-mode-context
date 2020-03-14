import { createMuiTheme } from "@material-ui/core/styles";

export const lightTheme = createMuiTheme({
  palette: {
    text: {
      primary: "#000",
      secondary: "rgba(0,0,0,0.625)"
    },
    background: {
      default: "#fafafa"
    }
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    text: {
      primary: "#fff",
      secondary: "rgba(255,255,255,0.625)"
    },
    background: {
      default: "#000"
    }
  }
});

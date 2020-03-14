import React, { useContext } from "react";
import { ThemeProvider } from "@material-ui/core";
import { DarkModeContext } from "./context/DarkModeContext";
import { lightTheme, darkTheme } from "./styles/theme";
import Home from "./components/Home";

const App = () => {
  const { prefersDarkMode } = useContext(DarkModeContext);

  let theme = prefersDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
};

export default App;

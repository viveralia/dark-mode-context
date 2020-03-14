import React from "react";
import { render } from "react-dom";
import "normalize.css";
import "typeface-roboto";
import App from "./App";
import DarkModeProvider from "./context/DarkModeContext";

render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>,
  document.getElementById("root")
);

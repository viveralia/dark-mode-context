import React, { createContext, useState, useEffect } from "react";

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [prefersDarkMode, setPrefersDarkMode] = useState(false);

  useEffect(() => {
    // Initial set
    setPrefersDarkMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
    // Starts a listner if the user changes his color scheme
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const setMode = e => {
      if (e.matches) {
        setPrefersDarkMode(true);
      } else {
        setPrefersDarkMode(false);
      }
    };
    darkMode.addListener(setMode);
    // Removes the listener when the component dies
    return () => {
      darkMode.removeListener(setMode);
    };
  }, []);

  return (
    <DarkModeContext.Provider value={{ prefersDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

import React, { useContext } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import text from "../constants/themeData.json";
import { DarkModeContext } from "../context/DarkModeContext";

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.background.default,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Home = () => {
  const classes = useStyles();
  const { prefersDarkMode } = useContext(DarkModeContext);

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom>
        {text[prefersDarkMode ? "dark" : "light"]["emoji"]["icon"]}
      </Typography>
      <Typography variant="h4" component="h2" color="textPrimary" gutterBottom>
        {text[prefersDarkMode ? "dark" : "light"]["title"]}
      </Typography>
      <Typography
        variant="body1"
        component="h3"
        color="textSecondary"
        gutterBottom
      >
        {text[prefersDarkMode ? "dark" : "light"]["body"]} ✨
      </Typography>
    </div>
  );
};

export default Home;

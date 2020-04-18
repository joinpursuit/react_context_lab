import React from "react";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "./Components/DarkMode/homecss";
import { Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./Components/DarkMode/GlobalStyle";
import useDarkMode from "./Components/DarkMode/useDarkMode";
import Button from "./Components/DarkMode/Button";
import Home from "./Components/Home";
import "./App.css";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightMode : darkMode;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Button theme={theme} toggleTheme={toggleTheme} />
      <Switch>
        <Route exact path={'/'} component={Home} />
      </Switch>
    </ThemeProvider>
  );
};

export default App;

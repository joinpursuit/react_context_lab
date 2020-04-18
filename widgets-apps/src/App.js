import React from "react";
import { ThemeProvider } from "styled-components";
import { lightMode, darkMode } from "./Components/DarkMode/homecss";
import {GlobalStyle} from './Components/DarkMode/GlobalStyle'
import useDarkMode from "./Components/DarkMode/useDarkMode";
import Button from './Components/DarkMode/Button'
import "./App.css";

const App = () => {
  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightMode : darkMode;

  return <ThemeProvider theme={themeMode}>
    <GlobalStyle/>
    <Button theme={theme} toggleTheme={toggleTheme}/>
  </ThemeProvider>;
};

export default App;

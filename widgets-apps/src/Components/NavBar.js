import React from "react";
import { NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Button from "./DarkMode/Button";
import useDarkMode from "./DarkMode/useDarkMode";
import { lightMode, darkMode } from "./DarkMode/homecss";
import { GlobalStyle } from "./DarkMode/GlobalStyle";

const NavBar = () => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightMode : darkMode;
  return (
    <nav>
       <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Button theme={theme} toggleTheme={toggleTheme} onClick={themeMode} />
        <NavLink exact to={"/"}>Home</NavLink>
        <NavLink exact to={"/clock"}>Clock</NavLink>
      </ThemeProvider>
    </nav>
  );
};

export default NavBar;

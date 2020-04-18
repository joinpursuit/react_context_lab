import { useState, useEffect } from "react";

//https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage; more info on localStorage

const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else if (theme === "dark") {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    window.matchMedia &&
    window.matchMedia("(prefers-colors-scheme: dark)").matches &&
    !localStorage
      ? setMode("dark")
      : localTheme
      ? setTheme(localTheme)
      : setMode("light");
  }, []);

  return [theme, toggleTheme];
};

export default useDarkMode;

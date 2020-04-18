import React, { useContext } from "react";
import { ThemeContext } from "../providers/ToggleProvider";

const Home = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>Welcome</h1>
      <img
        src="https://thumbs.gfycat.com/ResponsibleTanAnophelesmosquito-size_restricted.gif"
        alt="satellite"
      ></img>
    </div>
  );
};
export default Home;

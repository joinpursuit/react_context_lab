import React, { useContext } from "react";
import "./Css/reset.css";
import "./Css/App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/HomePage/Home";
import Weather from "./Components/Weather/Weather";
import Clock from "./Components/Clock/Clock";
import { ThemeContext } from "./Providers/ThemeProviders";

const App = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);
  let id = "";
  // eslint-disable-next-line
  {
    darkTheme ? (id = "dark") : (id = "light");
  }
  return (
    <div id={id} className="App">
      <NavBar />
      <button onClick={toggleTheme} className="theme">
        Dark
      </button>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/weather">
          <Weather />
        </Route>
        <Route exact path="/clock">
          <Clock />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

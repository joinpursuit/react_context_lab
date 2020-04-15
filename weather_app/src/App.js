import React from "react";
import "./Css/reset.css";
import "./Css/App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/HomePage/Home";
import Weather from "./Components/Weather/Weather";
import Clock from "./Components/Clock/Clock";

function App() {
  return (
    <div className="App">
      <NavBar />
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
}

export default App;

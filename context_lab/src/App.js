import React from "react";
import "../src/css/App.css";
import { Switch, Route } from "react-router-dom";

//components
import Home from "../src/components/Home";
import NavBar from "../src/components/NavBar";
import Weather from "../src/components/Weather";

function App() {
  return (
    <div className="App">
    <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/weather">
          <Weather />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

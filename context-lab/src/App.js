import React, { createContext } from "react";
import "./App.css";
import Clock from "./Components/Clock";
import Weather from "./Components/Weather";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
       
        </Route>
        <Route path to="/clock">
        
        </Route>
        <Route path to="/weather">
        
        </Route>
      </Switch>
    </div>
  );
}

export default App;

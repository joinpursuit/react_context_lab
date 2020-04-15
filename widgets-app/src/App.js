import React from "react";
import NavBar from "./components/NavBar";
// import actionType from "./actions/actionTypes";
import Home from "./components/Home";
import Weather from "./components/Weather";
import Clock from "./components/Clock"
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route path={"/weather"} component={Weather}/>
          <Route path={"/clock"} component={Clock}/>
        </Switch>
  
    </div>
  );
}

export default App;

import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from './Components/Home';
import Clock from './Components/Clock'
import NavBar from './Components/NavBar'

const App = () => {

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/clock'} component={Clock}/>
      </Switch>
    </div>
  );
};

export default App;

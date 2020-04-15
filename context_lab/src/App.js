import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

// components
import NavBar from './NavBar'
import Home from './components/Home/Home'
import Weather from './components/Weather/Weather'
import Clock from './components/Clock/Clock'
function App() {

  return (
    <div className="App">
    <NavBar/>
    <Switch>
      <Route exact path={"/"}>
      <Home/>
      </Route>
      <Route exact path={"/weather"}>
      <Weather/>
      </Route>
      <Route exact path={"/clock"}>
      <Clock/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;

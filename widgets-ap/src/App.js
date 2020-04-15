import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Weather from "./components/Weather";
import Clock from "./components/Clock";
import WeatherProvider from "./providers/WeatherProvider"


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/weather"}>
          <WeatherProvider>
            <Weather/>
          </WeatherProvider>
        </Route>
        <Route path={"/clock"} component={Clock}/>
      </Switch>
    </div>
  );
}

export default App;

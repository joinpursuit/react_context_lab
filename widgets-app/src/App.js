import React, {createContext} from "react";
import NavBar from "./components/NavBar";

import WeatherProvider from "./provider/WeatherProvider";
// import ClockProvider from "./provider/ClockProvider";
import ThemeProvider from './provider/ThemeProvider';
 

import Home from "./components/Home";
import Weather from "./components/Weather";
import Clock from "./components/Clock";

import { Route, Switch } from "react-router-dom";
import './App.css';
export const Context = createContext();

function App() {
  return (
    <div className="App">
    <ThemeProvider>
      <NavBar />

        <Switch>
          <Route exact path={"/"} component={Home} />

      <WeatherProvider>
          <Route path={"/weather"} component={Weather} />
      </WeatherProvider>
          
      {/* <ClockProvider>
        <Route path={"/clock"} component={Clock} />
      </ClockProvider> */}
        
        </Switch>
        </ThemeProvider>
    </div>
  );
}

export default App;

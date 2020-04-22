import React, {useState, createContext } from "react";
import NavBar from "./NavBar/NavBar";
import Clock from "./Components/Clock";
import ClockProviders from './Providers/ClockProvider'
import Weather from "./Components/Weather";
import Weather from './Providers/WeatherProvider'
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
export const ThemeContext = createContext('light')
function App() {
  const [theme, setTheme] =useState('light')
  const toggleTheme = ()=>{
    setTheme(theme === 'light' ? 'dark': 'light')
  }
  return (
    <div className="App">
      <ThemeContext.Provider value ={ThemeContext, toggleTheme}>

      <NavBar />
      <Switch>
      <Route exact path={"/"} component={Home}/>
      
    
        <Route  path={"/clock"} component={Clock}/>
      
    
        <Route path={"/weather"}component ={Weather}/>
       
   
      </Switch>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

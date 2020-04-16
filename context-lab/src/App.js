import React, { createContext } from "react";
import NavBar from "./NavBar/NavBar";
import Clock from "./Components/Clock";
import Weather from "./Components/Weather";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
export const Context = createContext()
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
      
    
        <Route  path={"/clock"} component={Clock}/>
      
    
        <Route path={"/weather"}component ={Weather}/>
       
   
      </Switch>
    </div>
  );
}

export default App;

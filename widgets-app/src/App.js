import React from "react";
import NavBar from "./components/NavBar"
import { Route, Switch } from "react-route-dom"
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar>
        <Switch>
          <Route exact path={"/"} component={Home}/>
        </Switch>
      </NavBar>
    </div>
  );
}

export default App;

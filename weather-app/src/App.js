import React, { useState, createContext } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from '../src/components/HomeComponent'
import Weather from '../src/components/WeatherComponent'
import Clock from '../src/components/ClockComponent'
// import WeatherByCountry from '../src/components/WeatherByCountry'
import ThemeProvider from '../src/providers/ThemeProvider'
import Error from '../src/components/Error'
import NavBar from '../src/components/NavBar'
import './App.css';


const App = () => {
  


  return (
    <div className="mainApp">
    <ThemeProvider> 
    <BrowserRouter> 

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

        {/* <Route exact path={"/weather/:country"}>
          <WeatherByCountry/>
        </Route> */}

        <Route exact path={"*"}>
          <Error />
        </Route>


    </Switch>
    
    
    
    
    </BrowserRouter>
    </ThemeProvider>



    </div>
  )
}

export default App;







// const App = () => {
//   return (
  
//     <div className="App">

// <BrowserRouter> 

//     <Navbar/>

//     <Switch>
//         <Route exact path={"/"}>
//             <Home/>
//         </Route>
    


//         <Route exact path={"/about"}>
//           <About/>
//         </Route>

    
//         <Route exact path={"/pokemon"}>
//           <Pokemon/>
//         </Route>

//         <Route exact path={"/pokemon/:name"}>
//           <PokemonDisplay/>
//         </Route>

//         <Route exact path={"*"}>
//           <Error />
//         </Route>


//     </Switch>

//     <Switch>


//         <Route
//           path="/github"
//           component={() => {
//             window.location = "https://github.com/darsuabasi";
//             return null;
//           }}
//         />
//         <Route
//           path="/linkedin"
//           component={() => {
//             window.location = "https://www.linkedin.com/in/uduakabasi-abasiurua-8ab113121/";
//             return null;
//           }}
//         />
        
//     </Switch> 

        

//     <Footer />

// </BrowserRouter>

//     </div>
//   );
// }

// export default App;

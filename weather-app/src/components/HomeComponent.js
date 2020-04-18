import React from 'react';
import "../css/Home.css";


const Home = () => {
  return (
   <div className="mainDiv">
        <div className="welcomeDiv"> 
            <h1 className="styleH1"> 
                Welcome to Uduakabasi's Weather App!
            </h1>
        </div>

        <div className="updateDiv"> 
            <h2 className="styleH2">
                Co-void-19 Pandemic.
            </h2>

            <h3 className="styleH3"> 
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"> Learn more </a>
            </h3>
        </div>
    </div>
        
  )
}


export default Home;
import React from "react";
import "./CSS/home.css";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeDiv">
        <h1>Welcome!</h1>
        <div className="pContainer">
          <p id="p">
            Widget App is an aplication that allows users to view the current
            time, and weather in there current location. The user can navigate
            between the weather and the time via the navigation bar on the left.
            Also don't forget to try the Dark Mode feature!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

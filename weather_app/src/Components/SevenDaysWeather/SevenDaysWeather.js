import React from "react";
import "./Css/sevenDaysWeather.css";
import Moment from "react-moment";

const SevenDaysWeather = () => {
  return (
    <div className="sevenDay">
      <div className="sevDayContainer">
        <img
          alt=""
          className="sevenDayImg"
          src="http://openweathermap.org/img/wn/11d@2x.png"
        ></img>
      </div>
      <div id="day" className="sevDayContainer">
        <h3>
          <Moment format="dddd" unix>
            {158600302}
          </Moment>
        </h3>
        <p id="dayP">thunderstorm</p>
      </div>
      <div id="day" className="sevDayContainer">
        <p id="degrees">
          {" "}
          <span id="degSpan">50°</span> | 75°
        </p>
      </div>
    </div>
  );
};

export default SevenDaysWeather;

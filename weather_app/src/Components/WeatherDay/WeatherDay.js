import React from "react";
import "./Css/weatherDay.css";
import Moment from "react-moment";

const WeatherDay = ({ weather }) => {
  return (
    <div className="dayDiv">
      <div id="container">
        <img
          alt=""
          className="todayImg"
          src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
        ></img>
      </div>
      <div id="container">
        <h2>Today</h2>
        <p className="time">{weather.current.weather[0].main}</p>
      </div>
      <div className="sunriseCont" id="container">
        <h2>Sunrise</h2>
        <p className="time">
          <Moment format="h:mm" unix>
            {weather.current.sunrise}
          </Moment>
          <span className="timeSpan">AM</span>
        </p>
      </div>
      <div className="sunriseCont" id="container">
        <h2>Sunset</h2>
        <p className="time">
          <Moment format="h:mm" unix>
            {weather.current.sunset}
          </Moment>
          <span className="timeSpan">PM</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDay;

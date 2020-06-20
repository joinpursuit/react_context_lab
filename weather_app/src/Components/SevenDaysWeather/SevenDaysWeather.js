import React from "react";
import "./Css/sevenDaysWeather.css";
import Moment from "react-moment";

const SevenDaysWeather = ({ weather }) => {
  let daily = weather.daily;
  return daily.map((day, i) => {
    return (
      <div key={i} className="sevenDay">
        <div className="sevDayContainer">
          <img
            alt=""
            className="sevenDayImg"
            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          ></img>
        </div>
        <div key={i + 1} id="day" className="sevDayContainer">
          <h3>
            <Moment format="dddd" unix>
              {day.dt}
            </Moment>
          </h3>
          <p id="dayP">{day.weather[0].main}</p>
        </div>
        <div key={i + 2} id="day" className="sevDayContainer">
          <p id="degrees">
            {" "}
            <span id="degSpan">
              {day.temp.min.toString().slice(0, 2)}°
            </span> | {day.temp.max.toString().slice(0, 2)}°
          </p>
        </div>
      </div>
    );
  });
};

export default SevenDaysWeather;

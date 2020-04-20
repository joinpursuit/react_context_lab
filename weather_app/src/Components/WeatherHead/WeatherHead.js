import React from "react";
import "./Css/weatherHead.css";

const WeatherHead = ({ weather }) => {
  return (
    <div className="headDiv">
      <img
        className="headImg"
        alt=""
        src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@2x.png`}
      ></img>
      <p className="title">{weather.timezone}</p>

      <p className="info">
        <span>{weather.current.temp.toString().slice(0, 2)}°</span> |{" "}
        {weather.current.weather[0].description}
      </p>
    </div>
  );
};

export default WeatherHead;

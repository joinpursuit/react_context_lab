import React from "react";
import "./Css/weatherBody.css";
import WeatherHead from "../WeatherHead/WeatherHead";
import WeatherDay from "../WeatherDay/WeatherDay";
import SevenDaysWeather from "../SevenDaysWeather/SevenDaysWeather";

const WeatherBody = ({ weather }) => {
  return (
    <div className="weatherDiv">
      <WeatherHead weather={weather} />

      <div className="divToScroll">
        <WeatherDay weather={weather} />

        <SevenDaysWeather weather={weather} />
      </div>
    </div>
  );
};

export default WeatherBody;

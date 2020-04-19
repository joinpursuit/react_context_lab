import React from "react";
import "./Css/weatherBody.css";
import WeatherHead from "../WeatherHead/WeatherHead";
import WeatherDay from "../WeatherDay/WeatherDay";
import SevenDaysWeather from "../SevenDaysWeather/SevenDaysWeather";

const WeatherBody = ({ weather }) => {
  return (
    <div className="weatherDiv">
      {/* HEAD WITH CURRENT TEMP BEGIN  */}
      <WeatherHead />

      {/* HEAD WITH CURRENT TEMP END  */}

      <div className="divToScroll">
        {/* CURRENT DAY INFO AND FORCAST BEGIN */}
        <WeatherDay />

        {/* CURRENT DAY INFO AND FORCAST END */}

        {/* SEVEN DAY FORCAST AND TEMP BEGIN */}
        <SevenDaysWeather />
        {/* SEVEN DAY FORCAST AND TEMP END */}
      </div>
      {/* END OF DIV TO SCROLL  */}
    </div>
  );
};

export default WeatherBody;

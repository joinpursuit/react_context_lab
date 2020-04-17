import React, { useContext } from "react";
import { WeatherContext } from "../providers/WeatherProvider";

const WeatherDisplay = () => {
  const { weather } = useContext(WeatherContext);
  debugger;
  return (
    <div className="weatherDisplay">
      {/* weather && weather.city && weather.city.name */}
      {weather?.name ? <h3>{weather.name}</h3> : null}
      {weather?.weather[0]?.description ? (
        <p>{weather.weather[0].description}</p>
      ) : null}
      {weather?.weather[0]?.icon ? (
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        />
      ) : null}
      {weather?.main?.temp ? (
        <>
          <p>Current temperature:</p>
          <h3>{Math.floor(((weather.main.temp - 273.15) * 9) / 5 + 32)}°F</h3>
        </>
      ) : null}
      {weather?.main?.temp ? (
        <>
          <p>High:</p>
          <h3>
            {Math.floor(((weather.main.temp_max - 273.15) * 9) / 5 + 32)}°F
          </h3>
        </>
      ) : null}
      {weather?.main?.temp ? (
        <>
          <p>Low:</p>
          <h3>
            {Math.floor(((weather.main.temp_min - 273.15) * 9) / 5 + 32)}°F
          </h3>
        </>
      ) : null}
      <h3>5 Day Forecast</h3>
    </div>
  );
};
export default WeatherDisplay;

import React, { useContext } from "react";
import { WeatherContext } from "../providers/WeatherProvider";
import API_KEY from "../secrets";

const WeatherDisplay = () => {
  const { weather } = useContext(WeatherContext);
  debugger;
  return (
    <div className="weatherDisplay">
      {weather?.current?.data?.name ? (
        <h3>{weather.current.data.name}</h3>
      ) : null}
      {weather?.current?.data?.weather[0]?.description ? (
        <p>{weather.current.data.weather[0].description}</p>
      ) : null}
      {weather?.current?.data?.weather[0]?.icon ? (
        <img
          src={`http://openweathermap.org/img/wn/${weather.current.data.weather[0].icon}@2x.png`}
        />
      ) : null}
      {weather?.current?.data?.main?.temp ? (
        <>
          <p>Current temperature:</p>
          <h3>
            {Math.floor(
              ((weather.current.data.main.temp - 273.15) * 9) / 5 + 32
            )}
            °F
          </h3>
        </>
      ) : null}
      {weather?.current?.data?.main?.temp ? (
        <>
          <p>High:</p>
          <h3>
            {Math.floor(
              ((weather.current.data.main.temp_max - 273.15) * 9) / 5 + 32
            )}
            °F
          </h3>
        </>
      ) : null}
      {weather?.current?.data?.main?.temp ? (
        <>
          <p>Low:</p>
          <h3>
            {Math.floor(
              ((weather.current.data.main.temp_min - 273.15) * 9) / 5 + 32
            )}
            °F
          </h3>
        </>
      ) : null}

      <h1>5 Day Forecast</h1>
      {weather?.forecast ? weather.forecast.map((date) => {}) : null}
    </div>
  );
};
export default WeatherDisplay;

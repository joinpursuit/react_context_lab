import React, { useContext } from "react";
import { WeatherContext } from "../providers/WeatherProvider";
import "./ForecastWeather.css";

const ForecastWeather = () => {
  const { weather } = useContext(WeatherContext);

  let forecast = weather.forecast.daily.map((el) => {
    let estSeconds = el.dt;
    let d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(estSeconds - 18000);
    return (
      <div className="dayForecast">
        <h3>Date: {d.toDateString()}</h3>
        <img
          src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`}
          alt="weatherIcon"
        />
        <p>High:</p>
        <h3>{Math.floor(((el.temp.max - 273.15) * 9) / 5 + 32)}</h3>
        <p>Low:</p>
        <h3>{Math.floor(((el.temp.min - 273.15) * 9) / 5 + 32)}</h3>
      </div>
    );
  });

  return (
    <>
      <h1>7 Day Forecast</h1>
      <div className="forecast">{forecast}</div>
    </>
  );
};

export default ForecastWeather;

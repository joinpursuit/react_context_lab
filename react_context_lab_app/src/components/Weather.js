import React, { useContext } from "react";
import { WeatherContext } from "../providers/WeatherProvider";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";

const Weather = () => {
  const { weather } = useContext(WeatherContext);
  console.log(weather);
  return (
    <div className="weather">
      <h1>Weather</h1>
      <WeatherForm />
      {/* <WeatherDisplay /> */}
      {weather === true ? <h1>weather</h1> : null}
    </div>
  );
};
export default Weather;

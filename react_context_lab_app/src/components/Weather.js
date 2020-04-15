import React, { useContext } from "react";
import { WeatherContext } from "../providers/WeatherProvider";
import WeatherForm from "./WeatherForm";

const Weather = () => {
  const { weather } = useContext(WeatherContext);
  console.log(weather);
  return (
    <div className="weather">
      <h1>Weather</h1>
      <WeatherForm />
    </div>
  );
};
export default Weather;

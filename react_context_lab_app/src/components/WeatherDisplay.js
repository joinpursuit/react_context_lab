import React, { useContext } from "react";
import { WeatherContext } from "../providers/WeatherProvider";

const WeatherDisplay = () => {
  const { weather } = useContext(WeatherContext);

  console.log(weather);
  // console.log(weather.city.name);
  // console.log(weather["city"]["country"]);

  // const displayweather
  return (
    <div className="weatherDisplay">
      {/* weather && weather.city && weather.city.name */}
      {weather?.city?.name ? <h3>{weather.city.name}</h3> : null}
      {/* <h3>{weather.city.country}</h3> */}
      <h3>5 Day Forecast</h3>
    </div>
  );
};
export default WeatherDisplay;

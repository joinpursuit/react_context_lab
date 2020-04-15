import React, { useContext } from "react";
import { WeatherContext } from "../providers/WeatherProvider";

const WeatherDisplay = () => {
  const { weather } = useContext(WeatherContext);
  debugger;
  console.log(weather.city.name);
  console.log(weather["city"]["country"]);
  return (
    <div className="weatherDisplay">
      {/* <h3>{weather["city"]["name"]}</h3> */}
      {/* <h3>{weather["city"]["country"]}</h3> */}
      <h3>5 Day Forecast</h3>
    </div>
  );
};
export default WeatherDisplay;

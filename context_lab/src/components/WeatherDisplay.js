import React, { useState } from "react";
import axios from "axios";
import apiKey from "../secret";
import Moment from "react-moment";
import { farenheit } from "./Weather";
import "../css/WeatherDisplay.css";

const WeatherDisplay = ({ location }) => {
  const [forecast, setForecast] = useState([]);
  let lat = location[0];
  let lon = location[1];
  const getForecast = async () => {
    try {
      let res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}
        `);
      setForecast(res.data.daily);
      console.log(forecast);
    } catch (error) {
      console.log(error);
      document.title = "ERROR";
    }
  };

  //   format="MMM D YYYY" withTitle>

  let week = forecast.map((day, i) => {
    let date = day.dt;
    return (
      <ul className="weekUl" key={i}>
        <li>
          <Moment unix>{date}</Moment>
        </li>
        <li>
          <h2 id="description">
            {day.weather.map(el => {
              return `${el.description}`;
            })}
          </h2>
        </li>
        <li>
          <h2>Temp:</h2>
          <h2 id="description">{`${Math.floor(farenheit(day.temp.day))} `} &#x00B0;</h2>
        </li>

        <li>
          <h2>UV Index:</h2>
          <h2 id="description">{day.uvi}</h2>
        </li>
      </ul>
    );
  });
  console.log(forecast);

  return (
    <div>
      <button className="showWeek" onClick={getForecast}>
        Get 7 Day Forecast!
      </button>
      <div className="displayDiv">
        <div className="weeklyForecast">{week}</div>
      </div>
    </div>
  );
};

export default WeatherDisplay;

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
      //   debugger;
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
    // console.log(day.weather);
    return (
      <ul className="weekUl" key={i}>
        <li>
          <Moment unix>{date}</Moment>
        </li>
        <li>
          <h2>Temp:</h2>
          {`${Math.floor(farenheit(day.temp.day))} `} &#x00B0;
        </li>
        <li>
          <h2>Sunrise:</h2>
          <Moment unix>{day.sunrise}</Moment>
        </li>
        <li>
          <h2>Sunset:</h2>
          <Moment unix>{day.sunset}</Moment>
        </li>

        <li>
          <h2>
            {day.weather.map(el => {
              return `${el.description}`;
            })}
          </h2>
        </li>

        <li>
          <h2>UV Index:</h2>
          {day.uvi}
        </li>
      </ul>
    );
  });
  console.log(forecast);

  return (
    <div className="displayDiv">
      <button className="showWeek" onClick={getForecast}>
        Get 5 Day Forecast!
      </button>
      <div className="weeklyForecast">{week}</div>
    </div>
  );
};

export default WeatherDisplay;

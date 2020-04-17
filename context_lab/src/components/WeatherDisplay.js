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

  let week = forecast.map((day, i) => {
    let date = day.dt;
    console.log(day.weather)
    return (
      <ul key={i}>
        <li>
          <Moment unix format="MMM D YYYY" withTitle>
            {date}
          </Moment>
        </li>
        <li>Temp: {Math.floor(farenheit(day.temp.day))}</li>
        <li>
          Sunrise: <Moment unix>{day.sunrise}</Moment>
        </li>
        <li>
          Sunset: <Moment unix>{day.sunset}</Moment>
        </li>

        <li>{day.weather.map(el => {
            return el.description
        })}</li>
      
        <li>UV Index:{day.uvi}</li>
        
      </ul>
    );
  });
  console.log(forecast);

  return (
    <div>
      <button onClick={getForecast}>Get 5 Day Forecast!</button>
      <div className="weeklyForecast">{week}</div>
    </div>
  );
};

export default WeatherDisplay;

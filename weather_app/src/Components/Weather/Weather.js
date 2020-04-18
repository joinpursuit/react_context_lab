import React, { useState, useEffect } from "react";
import axios from "axios";
import { key } from "../../other/secrets";
import Moment from "react-moment";
import "./CSS/weather.css";

// const getWeather = async (lat, long) => {
//   let current = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${key}`
//   );
//   let forecast = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${key}
//   `);
//   // debugger;
// };

const Weather = () => {
  const [location, setLocation] = useState([]);

  const getAddress = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      setLocation([lat, long]);
    });
  };

  // useEffect(() => {
  //   getAddress();
  // }, []);

  // useEffect(() => {
  //   if (location.length >= 1) {
  //     getWeather(location[0], location[1]);
  //   }
  // }, [location]);

  return (
    <div className="weatherDiv">
      <div className="headDiv">
        <p className="title">New York City</p>

        <p className="info">
          <span>46°</span> | Sunny
        </p>
      </div>
      <div className="dayDiv">
        <h2>Today</h2>
      </div>
      {/* <Moment format="HH:mm" unix>
        {158600302}
      </Moment> */}
    </div>
  );
};

export default Weather;

// let date = moment.unix("1586003020");
// let code = date._d.toString(); //.slice(16, 21)
// console.log(moment(code));

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
        <img
          className="headImg"
          alt=""
          src="http://openweathermap.org/img/wn/01d@2x.png"
        ></img>
        <p className="title">New York City</p>

        <p className="info">
          <span>46°</span> | Sunny
        </p>
      </div>
      <div className="dayDiv">
        <div id="container">
          <img
            alt=""
            className="todayImg"
            src="http://openweathermap.org/img/wn/03d@2x.png"
          ></img>
        </div>
        <div id="container">
          <h2>Today</h2>
          <p className="time">Scattered Clouds</p>
        </div>
        <div id="container">
          <h2>Sunrise</h2>
          <p className="time">
            <Moment format="HH:mm" unix>
              {158600302}
            </Moment>
            <span className="timeSpan">AM</span>
          </p>
        </div>
        <div id="container">
          <h2>Sunset</h2>
          <p className="time">
            <Moment format="HH:mm" unix>
              {158600302}
            </Moment>
            <span className="timeSpan">PM</span>
          </p>
        </div>
      </div>

      <div className="sevenDay">
        <div className="sevDayContainer">
          <img
            alt=""
            className="sevenDayImg"
            src="http://openweathermap.org/img/wn/11d@2x.png"
          ></img>
        </div>
        <div id="day" className="sevDayContainer">
          <h3>Saturday</h3>
          <p id="dayP">thunderstorm</p>
        </div>
        <div id="day" className="sevDayContainer">
          <p id="degrees">
            {" "}
            <span>50°</span>
          </p>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Weather;

// let date = moment.unix("1586003020");
// let code = date._d.toString(); //.slice(16, 21)
// console.log(moment(code));

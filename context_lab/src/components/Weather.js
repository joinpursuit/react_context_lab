import React, { useState, useEffect } from "react";
import "../css/Weather.css";
import apiKey from "../secret";
import axios from "axios";

const Weather = () => {
  const [location, setLocation] = useState([]);
  const [temperature, setTemperature] = useState([]);

  const getAddress = async () => {
    await navigator.geolocation;
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      setLocation([lat, long]);
    });
  };

  // console.log(location);

  let lat = location[0];
  let long = location[1];
  console.log(lat, long);

  const getWeather = async () => {
    try {
      let realTemp = 0;
      let farenheit = 0;
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
      );
      let temp = res.data.main.temp;
      let farenheit = (temp - 273.15) * 1.8 + 32;
      const realTemp = Math.round(farenheit);
      // debugger;
      // console.log(realTemp);
      setTemperature(realTemp);
    } catch (error) {
      console.log(error);
      document.title = "ERROR";
    }
    // getWeather();
  };
  console.log(temperature);

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div>
      <h1>Weather</h1>
      <h2>Current Location: </h2>
      <p>Your Coordinates: {location} </p>
      <button onClick={getWeather}>Get Your Local Weather</button>
      <p>{temperature}</p>
    </div>
  );
};

export default Weather;

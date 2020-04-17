import React, { useState, useEffect } from "react";
import "../css/Weather.css";
import apiKey from "../secret";
import axios from "axios";
import WeatherDisplay from "./WeatherDisplay";

export const farenheit = temp => {
  return (temp - 273.15) * 1.8 + 32;
};

const Weather = () => {
  const [location, setLocation] = useState([]);
  const [temperature, setTemperature] = useState([]);
  const [feelsLike, setFeelsLike] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [humidity, setHumidity] = useState("");
  // const [currentStats, setCurrentStats] = useState([]);

  const getAddress = async () => {
    await navigator.geolocation;
    navigator.geolocation.getCurrentPosition(position => {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      setLocation([lat, long]);
    });
  };
  console.log(location);

  let lat = location[0];
  let long = location[1];

  const getWeather = async () => {
    try {
      let realTemp = 0;
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`
      );
      // debugger;
      const stat = res.data.main;
      let temp = stat.temp;
      realTemp = Math.round(farenheit(temp));
      setTemperature(realTemp);
      setFeelsLike(Math.round(farenheit(stat.feels_like)));
      setMinTemp(Math.round(farenheit(stat.temp_min)));
      setMaxTemp(Math.round(farenheit(stat.temp_max)));
      setPressure(stat.pressure);
      setHumidity(stat.humidity);
      // console.log(feelsLike, minTemp, maxTemp, pressure, humidity)
    } catch (error) {
      console.log(error);
      document.title = "ERROR";
    }
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div>
      <h1>Weather</h1>
      <h2>Current Location: </h2>
      <p>Your Coordinates: {location} </p>
      <button onClick={getWeather}>Get Your Local Weather</button>
      <p> Your Current Temperature: {temperature}</p>
      <div>
        <ul>
          <li>Feels like: {feelsLike}</li>
          <li>Today's low: {minTemp}</li>
          <li>Today's high: {maxTemp}</li>
          <li>Pressure: {pressure}</li>
          <li>Humidity: {humidity}</li>
        </ul>
      </div>

      <WeatherDisplay location={location} />
    </div>
  );
};

export default Weather;

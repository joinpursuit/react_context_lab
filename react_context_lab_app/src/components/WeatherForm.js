import React, { useContext, useState } from "react";
import axios from "axios";
import API_KEY from "../secrets.js";
import { WeatherContext } from "../providers/WeatherProvider";
import { fetchWeather } from "../actions/weatherActions";

const WeatherForm = () => {
  const { dispatch } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  const getWeatherByZipCode = async (e) => {
    e.preventDefault();

    try {
      let res_current = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${input}&APPID=${API_KEY}`
      );

      // let res_forecast = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/onecall?zip=${input}&APPID=${API_KEY}`
      // );

      await dispatch(
        fetchWeather({
          current: res_current,
          // forecast: res_forecast.data,
        })
      );
    } catch (error) {
      console.log(error);
      //   dispatch(displayErrors(error.message));
    }
  };

  return (
    <form onSubmit={getWeatherByZipCode}>
      <input
        type="text"
        pattern="[0-9]{5}"
        placeholder="Enter your zip code"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button type="submit">Find Weather</button>
    </form>
  );
};

export default WeatherForm;

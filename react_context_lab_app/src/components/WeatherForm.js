import React, { useContext, useState } from "react";
import axios from "axios";
import API_KEY from "../secrets.js";
import { WeatherContext } from "../providers/WeatherProvider";
import { fetchWeather } from "../actions/weatherActions";

const WeatherForm = () => {
  const { dispatch } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  const getWeather = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?zip=${input}&APPID=${API_KEY}`
      );

      await dispatch(fetchWeather(res.data));
    } catch (error) {
      //   dispatch(displayErrors(error.message));
    }
  };

  return (
    <form onSubmit={getWeather}>
      <input
        type="number"
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

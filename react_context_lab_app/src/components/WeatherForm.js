import React, { useContext, useState } from "react";
import axios from "axios";
import API_KEY from "../secrets.js";
import { WeatherContext } from "../providers/WeatherProvider";

const WeatherForm = () => {
  const { dispatch } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  const fetchTodos = () => async (dispatch) => {
    let zip = "11377";

    try {
      let res = await axios.get(
        `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&APPID=${API_KEY}`
      );
      debugger;
      dispatch(fetchWeather(res.data.payload));
    } catch (error) {
      //   dispatch(displayErrors(error.message));
    }
  };

  fetchTodos();

  return (
    <form>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </form>
  );
};

export default WeatherForm;

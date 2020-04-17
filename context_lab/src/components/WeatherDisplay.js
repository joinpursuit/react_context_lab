import React, { useState } from "react";
import axios from "axios";
import apiKey from "../secret";

const WeatherDisplay = ({ location }) => {
  const getForecast = async () => {
    try {
        let res = await axios.get(``)
    } catch (error) {
      console.log(error);
      document.title = "ERROR";
    }
  };

  return (
    <div>
      <button>Get 5 Day Forecast!</button>
    </div>
  );
};

export default WeatherDisplay;

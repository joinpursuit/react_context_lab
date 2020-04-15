import React, { createContext, useState, useReducer } from "react";
import WeatherReducer from "../reducers/weatherReducer";
export const WeatherContext = createContext();

const [weather, dispatch] = useReducer(WeatherReducer, []);

const WeatherProvider = (props) => {
  return (
    <WeatherContext.Provider value={{ count, dispatch }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;

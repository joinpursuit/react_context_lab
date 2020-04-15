import React, { createContext, useState, useReducer } from "react";
import WeatherReducer from "../reducers/weatherReducer";
export const WeatherContext = createContext();

const WeatherProvider = (props) => {
  const [weather, dispatch] = useReducer(WeatherReducer, []);
  return (
    <WeatherContext.Provider value={{ weather, dispatch }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;

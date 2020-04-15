import React, { createContext, useReducer } from "react";
import WeatherReducer from "../reducers/WeatherReducer";
export const WeatherContext = createContext();

const WeatherProvider = (props) => {
  const [weather, dispatch] = useReducer(WeatherReducer);
  return (
    <WeatherContext.Provider value={{ weather, dispatch }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;

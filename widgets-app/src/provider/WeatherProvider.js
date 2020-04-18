import React, {useReducer, createContext} from "react"
import WeatherReducer from "../reducers/WeatherReducer"
export const WeatherContext = createContext();

const WeatherProvider = (props) => {
  const [forecast, dispatch] = useReducer(WeatherReducer);
 
  return (
    <WeatherContext.Provider value={{ forecast, dispatch }}>
      {props.children}
    </WeatherContext.Provider>)
  
}

export default WeatherProvider;
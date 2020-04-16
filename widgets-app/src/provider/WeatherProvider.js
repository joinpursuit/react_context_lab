import React, {useReducer, createContext} from "react"
import WeatherReducer from "../reducers/WeatherReducer"
export const WeatherContext = createContext();

const WeatherProvider = (props) => {
  const [location, dispatch] = useReducer(WeatherReducer, ["Miami"]);
 
  return (<WeatherContext.Provider return value={{ location, dispatch }}>{props.children}</WeatherContext.Provider>)
  
}

export default WeatherProvider;
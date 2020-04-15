import React, {useReducer, createContext} from "react"
import WeatherReducer from "../reducers/WeatherReducer"
export const WeatherContext = createContext();

const WeatherProvider = (props) => {
  const [Weather, dispatch] = useReducer(WeatherReducer, ["this is the weather initial state",{}]);
 
  return (<WeatherContext.Provider return value={{ Weather, dispatch }}>{props.children}</WeatherContext.Provider>)
  
}

export default WeatherProvider;
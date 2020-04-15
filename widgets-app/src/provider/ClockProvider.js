import React, { createContext } from "react";
import React, {useReducer, createContext} from "react"
import ClockReducer from "../reducers/WeatherReducer"

export const HomeContext = createContext();

const ClockProvider = (props) => {
  const Clock= useReducer(ClockReducer);
  const [Clock, dispatch] = UseReducer(ClockReducer);
  return (<HomeContext.Provider return value={{ Home }}>{props.children}</HomeContext.Provider>)
  
}

export default ClockProvider;




import React, {useReducer, createContext} from "react" 
import ClockReducer from "../reducers/ClockReducer"
export const HomeContext = createContext();

const ClockProvider = (props) => {
  const [Clock, dispatch] = UseReducer(ClockReducer, 0);

  return (<ClockContext.Provider return value={{ Clock, dispatch }}>{props.children}</ClockContext.Provider>)
  
}

export default ClockProvider;




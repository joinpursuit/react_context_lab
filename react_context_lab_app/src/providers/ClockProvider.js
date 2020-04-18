import React, { createContext, useReducer } from "react";
import ClockReducer from "../reducers/ClockReducer";
export const ClockContext = createContext();

const ClockProvider = (props) => {
  const [time, dispatch] = useReducer(ClockReducer);

  return (
    <ClockContext.Provider value={{ time, dispatch }}>
      {props.children}
    </ClockContext.Provider>
  );
};

export default ClockProvider;

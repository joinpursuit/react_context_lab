import React, { createContext, useState } from "react";
export const WeatherContext = createContext();

const WeatherProvider = (props) => {
    const [count, setCount] = useState(0);

    

    const increment = () => setCount(count + 1);
    const decrement = () => setCount (count - 1);
    return (
        <CounterContext.Provider value ={{count, increment, decrement}}>
            {props.children}
        </CounterContext.Provider>
    )
}

export default WeatherProvider;
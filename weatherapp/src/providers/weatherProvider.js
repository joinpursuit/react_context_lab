import React, { createContext , useReducer} from 'react';
import WeatherReducer from '../reducer/TodoReducer';
export const WeatherContext = createContext();

const weatherProvider = (props) => {
    const [weathers, dispatch] = useReducer(WeatherReducer);
    
    return(
        <WeatherContext.Provider value={{weathers, dispatch}}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default weatherProvider; 
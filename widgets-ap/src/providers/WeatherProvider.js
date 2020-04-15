import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const WeatherContext = createContext();

const WeatherProvider = (props) => {
    const [forecast, setForecast] = useState([]);
    const [city, setCity] = useState([])

    const getForecast = async ()=> {
        debugger
        try {
            let res = await axios("http://api.openweathermap.org/data/2.5/forecast?id=5128581&appid=cac8bebe1d460614795313edbd88cb49");
            setForecast(res.data.list);
            setCity(res.data.city)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getForecast()
    }, [])

    

    
    return (
        <WeatherContext.Provider value ={{forecast, city}}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;
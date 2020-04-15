import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import "../css/WeatherProvider.css";
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

    // useEffect(() => {
    //     getForecast()
    // }, [])

    const getCity = (city) => {
        return(
            <div className="cityInfo">
                <h1>{city.name}</h1>
                <h4>Country: {city.country}</h4>
                <h4>Latitude: {city.coord.lat}</h4>
                <h4>Longitude: {city.coord.lon}</h4>
            </div>
        )
    }

    const getInfo = forecast.map((forecastInfo, i) => {
        if(i < 5) {
            return(
                <ul key={i}>
                    <li>Date: {forecastInfo.dt_txt}</li>
                    <li>Current Weather: {forecastInfo.weather[0].description}</li>
                    <li>Current Temp: {forecastInfo.main.temp}</li>
                    <li>High: {forecastInfo.main.temp_max}</li>
                    <li>Low: {forecastInfo.main.temp_min}</li>
                <li>Humidity: {forecastInfo.main.humidity}%</li>
            </ul>
            )
        }
    })
    
    return (
        <WeatherContext.Provider value ={{ getCity, getInfo, getForecast}}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherProvider;
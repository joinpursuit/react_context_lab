import React, { useState, useEffect } from "react"
import axios from "axios"
const { APPID } = require("../../secrets")


const Weather = () => {
    const [ weather, setWeather ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ country, setCountry] = useState("")

    useEffect(() => {

        const apiCall = async (url) => {
            let res = await axios.get(url)
            setWeather(res.data.weather[0].main)
            setDescription(res.data.weather[0].description)
            setCountry(res.data.sys.country)
        }
    apiCall(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=${APPID}`)
    }, [])

    return (
        <div className="dark">
            <div className="weather">
            THIS IS THE WEATHER PAGE
            <h2>Current weather:</h2>
            <h2>{weather}</h2>
            <h3>{description}</h3>
            <h3>{country}</h3>
            </div>
        </div>
    )
}

export default Weather;
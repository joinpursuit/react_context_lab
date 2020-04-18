import React, { useState, useEffect, useContext } from "react"
import  { ThemeContext } from "../../providers/ThemeProvider"
import axios from "axios"
const { APPID } = require("../../secrets")


const Weather = () => {
    const [ weather, setWeather ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ country, setCountry] = useState("")
    const { theme } = useContext(ThemeContext)

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
        <div className={`${theme}`}>
            <div className="weather">
            <h1>Current weather:</h1>
            <h2>{weather}</h2>
            <h3>What to expect: {description}</h3>
            <h3>Country: {country}</h3>
            </div>
        </div>
    )
}

export default Weather;
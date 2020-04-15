import React, { useState, useEffect } from "react"
import axios from "axios"
const { APPID } = require("../../secrets")


const Weather = () => {

    useEffect(() => {

        const apiCall = async (url) => {
            let res = await axios.get(url)
            debugger
        }
    apiCall(`http://api.openweathermap.org/data/2.5/weather?id=524901&APPID=${APPID}`)
    }, [])

    return (
        <div>
        THIS IS THE WEATHER PAGE
        </div>
    )
}

export default Weather;
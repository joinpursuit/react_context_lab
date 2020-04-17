import React from "react";
import { useSelector } from 'react-redux'

const DisplayWeather = () => {
    const weather = useSelector((city) => {
        debugger
        return Object.values(city.weather);
    })
    return (
        <div>
            <ul> 
                {weather.map((weat) => {
                    return <li key={weat.city.name}>{weat.city.country}</li>
                })}
            </ul>
           
        </div>
    )
}

export default DisplayWeather;






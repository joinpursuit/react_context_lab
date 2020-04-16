import React, {useContext} from "react";
import { WeatherContext } from "../providers/WeatherProvider";
import "../css/Weather.css";

const Weather = () => {
    const {getCity} = useContext(WeatherContext);
    const {getInfo} = useContext(WeatherContext);
    const {getForecast} = useContext(WeatherContext);

    return(
        <div className="weather">
            <div className="city">
                <h3>{getCity()}</h3>
            </div>
            <button onClick={getForecast}>Get 5 Day Forecast</button>
            <h3>Weather{getInfo}</h3>
        </div>
    )
} 

export default Weather;
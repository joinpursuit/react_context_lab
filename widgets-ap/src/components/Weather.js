import React, {useContext} from "react";
import { WeatherContext } from "../providers/WeatherProvider";

const Weather = () => {
    const {getCity} = useContext(WeatherContext);
    const {getInfo} = useContext(WeatherContext);
    const {getForecast} = useContext(WeatherContext);

    return(
        <div className="weather">
            <div className="city">
                {getCity}
            </div>
            <button onClick={getForecast}>Get 5 Day Forecast</button>
            {/* <h3>City{city}</h3> */}
            <h3>Weather{getInfo}</h3>
        </div>
    )
} 

export default Weather;
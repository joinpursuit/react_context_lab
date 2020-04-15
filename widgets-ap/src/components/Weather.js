import React, {useContext} from "react";
import { WeatherContext } from "../providers/WeatherProvider";

const Weather = () => {
    debugger
    const {forecast} = useContext(WeatherContext);
    const {city} = useContext(WeatherContext);

    return(
        <div className="Weather">
            city{city}
            Weather {forecast}
        </div>
    )
} 

export default Weather;
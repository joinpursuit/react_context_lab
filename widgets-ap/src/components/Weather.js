import React, {useContext} from "react";
import { WeatherContext } from "../providers/WeatherProvider";

const Weather = () => {
    const {forecast} = useContext(WeatherContext);

    return(
        <div className="Weather">
            Weather {forecast}
        </div>
    )
} 

export default Weather;
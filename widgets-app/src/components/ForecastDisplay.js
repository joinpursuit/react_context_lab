import React, {useContext} from "react";
import { WeatherContext } from "../provider/WeatherProvider"

const ForecastDisplay = () => {
  const { forecast } = useContext(WeatherContext);
  let currTemp = forecast.main.temp
  let currDesc = forecast.weather[0].description
  return (
    <div>
      <h1>My Weather Forecast</h1>
      <p>{currTemp}</p>
      <p>{currDesc}</p>
    </div>
  )
}

export default ForecastDisplay;
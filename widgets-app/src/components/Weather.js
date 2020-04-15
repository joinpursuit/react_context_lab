import React,{ useContext} from "react";
import { WeatherContext } from "../provider/WeatherProvider";
import { weather } from "../actions/WeatherActions";
const Weather = () => {
  const { Weather, dispatch } = useContext(WeatherContext);

  const click = (e) => {
    e.preventDefault();
    dispatch(weather("THis is the new input"));
  }
  console.log("this is the weather state", Weather);
  return (
    <div className="Weather">
  
    this is Weather
      
        <button onClick={(e)=>click(e)}>click</button>
    </div>
  )
}
export default Weather;
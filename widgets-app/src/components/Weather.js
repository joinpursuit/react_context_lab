import React,{ useContext, useState} from "react";
import { WeatherContext } from "../provider/WeatherProvider";
import { weather } from "../actions/weatherActions";
import { ThemeContext } from '../provider/ThemeProvider';
import axios from 'axios';
import API_KEY from "../api";
import ForecastDisplay from "./ForecastDisplay";

const Weather = () => {
  const { theme } = useContext(ThemeContext);
  const [input, setInput] = useState("")
  const { dispatch } = useContext(WeatherContext);

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}`)
      debugger
      dispatch(weather(res.data.list[0]));
      setInput("")
    } catch (err) {
      console.log(err);
      
    }
  }
  // res.data.list[0].main.temp
  // res.data.list[0].weather[0].description

 
  return (
    <div className={theme}>

      <form onSubmit={fetchWeather}>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
        <button>click</button>
      </form>
      <ForecastDisplay />
    </div>
  )
}
export default Weather;
import React,{ useContext, useState} from "react";
import { WeatherContext } from "../provider/WeatherProvider";
import { weather } from "../actions/weatherActions";
const Weather = () => {
  const [input, setInput] = useState("")
  const { dispatch, location } = useContext(WeatherContext);

  const click = (e) => {
    e.preventDefault();
    dispatch(weather(input));
    setInput("")
  }
  console.log("this is the weather state", location);
  return (
    <div className="Weather">
      <form onSubmit={click}>
        <input type="text" value={input} onChange={e=>setInput(e.target.value)}/>
        <button>click</button>
      </form>
    </div>
  )
}
export default Weather;
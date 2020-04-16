import React, { useState, useEffect, useContext, useDispatch } from "react";
import WeatherForm from "./WeatherForm";
import WeatherDisplay from "./WeatherDisplay";
import axios from "axios";
import { fetchWeather } from "../actions/weatherActions";
import { WeatherContext } from "../providers/WeatherProvider";
import API_KEY from "../secrets";

const Weather = () => {
  const { dispatch } = useContext(WeatherContext);
  const [location, setLocation] = useState({});

  const getWeatherbyLatLong = async (lat, long) => {
    try {
      let res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
      );
      debugger;
      await dispatch(fetchWeather(res.data));
    } catch (error) {
      console.log(error);
      //   dispatch(displayErrors(error.message));
    }
  };

  const getAddress = async () => {
    await navigator.geolocation;
    await navigator.geolocation.getCurrentPosition(
      async (position) => {
        let lat = await position.coords.latitude;
        let long = await position.coords.longitude;
        setLocation({ lat, long });
        await getWeatherbyLatLong(lat, long);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <div className="weather">
      <h1>Weather</h1>
      <h1>Current Location</h1>
      {`latitude: ${location.lat}, longitude: ${location.long}`}
      <WeatherForm />
      <WeatherDisplay />
      {/* {weather === true ? <WeatherDisplay /> : null} */}
    </div>
  );
};
export default Weather;

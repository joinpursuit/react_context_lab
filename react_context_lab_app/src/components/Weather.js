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

  const getWeatherByLatLong = async (lat, long) => {
    try {
      let res_current = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
      );
      let res_forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`
      );
      await dispatch(
        fetchWeather({
          location: res_forecast.data.city,
          current: res_current,
          forecast: res_forecast.data.list,
        })
      );
      debugger;
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
        await getWeatherByLatLong(lat, long);
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
      <WeatherForm />
      <h1>Weather</h1>
      <WeatherDisplay />
    </div>
  );
};
export default Weather;

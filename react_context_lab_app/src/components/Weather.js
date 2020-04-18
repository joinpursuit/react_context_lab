import React, { useState, useEffect, useContext } from "react";
import WeatherForm from "./WeatherForm";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import axios from "axios";
import { fetchWeather } from "../actions/weatherActions";
import { WeatherContext } from "../providers/WeatherProvider";
import API_KEY from "../secrets";

const Weather = () => {
  const { weather, dispatch } = useContext(WeatherContext);
  const [location, setLocation] = useState({});

  const getWeatherByLatLong = async (lat, long) => {
    try {
      let res_current = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
      );
      let res_forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`
      );
      await dispatch(
        fetchWeather({
          current: res_current,
          forecast: res_forecast.data,
        })
      );
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
      <button onClick={getAddress}>Use My Location</button>
      <WeatherForm />
      <h1>Weather</h1>
      <CurrentWeather />
      {weather?.forecast ? <ForecastWeather /> : null}
    </div>
  );
};
export default Weather;

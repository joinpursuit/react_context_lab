import React, { useState, useEffect } from "react";
import axios from "axios";
import { key } from "../../other/secrets";
import WeatherBody from "../WeatherBody/WeatherBody";
import Loading from "../Loading/Loading";

const Weather = () => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getAddress = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve([position.coords.latitude, position.coords.longitude]);
      });
    });
  };
  const getWeather = async (lat, long) => {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${key}
    `);
    return res.data;
  };
  const set = (res) => {
    setWeather(res);

    setIsLoading(false);
  };

  const loadPage = () => {
    getAddress().then((res) =>
      getWeather(res[0], res[1]).then((res) => set(res))
    );
  };

  useEffect(() => {
    loadPage();
  }, []);

  return <>{isLoading ? <Loading /> : <WeatherBody weather={weather} />}</>;
};

export default Weather;

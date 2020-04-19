import React, { useState, useEffect } from "react";
import axios from "axios";
import { key } from "../../other/secrets";
import WeatherBody from "../WeatherBody/WeatherBody";

const Weather = () => {
  // const [location, setLocation] = useState([]);
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getAddress = async () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve([position.coords.latitude, position.coords.longitude]);
      });
    });

    // navigator.geolocation.getCurrentPosition((position) => {
    //   let lat = position.coords.latitude;
    //   let long = position.coords.longitude;
    //   // setLocation([lat, long]);
    //   return [lat, long];
    // });
  };
  const getWeather = async (lat, long) => {
    let res = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=imperial&appid=${key}
    `);
    setWeather(res.data);
  };
  const loadPage = () => {
    getAddress().then((res) =>
      getWeather(res[0], res[1]).then(setIsLoading(false))
    );
  };

  // useEffect(() => {
  //   loadPage();
  // }, []);

  // useEffect(() => {
  //   if (location.length >= 1) {

  //   }
  // }, [location]);
  console.log(weather);

  return <WeatherBody />;
};

export default Weather;

// let date = moment.unix("1586003020");
// let code = date._d.toString(); //.slice(16, 21)
// console.log(moment(code));

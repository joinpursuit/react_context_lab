import React, { useContext } from "react";
import { WeatherContext } from "../providers/WeatherProvider";

const CurrentWeather = () => {
  const { weather } = useContext(WeatherContext);

  return (
    <div className="currentWeather">
      {weather?.current?.data?.name ? (
        <h3>{weather.current.data.name}</h3>
      ) : null}
      {weather?.current?.data?.weather[0]?.description ? (
        <p>{weather.current.data.weather[0].description}</p>
      ) : null}
      {weather?.current?.data?.weather[0]?.icon ? (
        <img
          src={`http://openweathermap.org/img/wn/${weather.current.data.weather[0].icon}@2x.png`}
          alt="weatherIcon"
        />
      ) : null}
      {weather?.current?.data?.main?.temp ? (
        <>
          <p>Current temperature:</p>
          <h3>
            {Math.floor(
              ((weather.current.data.main.temp - 273.15) * 9) / 5 + 32
            )}
            °F
          </h3>
        </>
      ) : null}
      {weather?.current?.data?.main?.temp ? (
        <>
          <p>High:</p>
          <h3>
            {Math.floor(
              ((weather.current.data.main.temp_max - 273.15) * 9) / 5 + 32
            )}
            °F
          </h3>
        </>
      ) : null}
      {weather?.current?.data?.main?.temp ? (
        <>
          <p>Low:</p>
          <h3>
            {Math.floor(
              ((weather.current.data.main.temp_min - 273.15) * 9) / 5 + 32
            )}
            °F
          </h3>
        </>
      ) : null}
    </div>
  );
};
export default CurrentWeather;

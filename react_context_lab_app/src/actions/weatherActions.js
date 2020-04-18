import { FETCH_WEATHER } from "./actionTypes";

export const fetchWeather = (weather) => ({
  type: FETCH_WEATHER,
  payload: weather,
});

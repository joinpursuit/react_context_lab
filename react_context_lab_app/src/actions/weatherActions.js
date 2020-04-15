import { FETCH_WEATHER } from "./actionsTypes";

export const weatherDisplay = (weather) => ({
  type: FETCH_WEATHER,
  payload: weather,
});

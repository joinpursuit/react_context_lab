import { WEATHER } from "./actionTypes"
export const weather = (location) => ({ type: WEATHER, payload:location })
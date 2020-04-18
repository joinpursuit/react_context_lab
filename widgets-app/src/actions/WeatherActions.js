import { WEATHER } from "./actionTypes"
export const weather = (forecast) => ({ type: WEATHER, payload:forecast})
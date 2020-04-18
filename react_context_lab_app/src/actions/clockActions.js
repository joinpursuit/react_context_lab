import { CURRENT_TIME } from "./actionTypes";

var today = new Date();
let time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

export const currentTime = () => ({
  type: CURRENT_TIME,
  payload: { time, today },
});

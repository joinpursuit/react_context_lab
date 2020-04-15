import { FETCH_WEATHER } from "../actions/actionTypes";
const WeatherReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload;
    default:
      return state;
  }
};

export default WeatherReducer;

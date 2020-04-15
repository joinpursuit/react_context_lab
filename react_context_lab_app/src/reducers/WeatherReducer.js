import { FETCH_WEATHER } from "../actions/actionsTypes";
const WeatherReducer = (state = ["weather"], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default WeatherReducer;

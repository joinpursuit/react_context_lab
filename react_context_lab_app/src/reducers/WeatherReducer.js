import { FETCH_WEATHER } from "../actions/actionsTypes";
const WeatherReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload, ...state];
    default:
      return state;
  }
};

export default WeatherReducer;

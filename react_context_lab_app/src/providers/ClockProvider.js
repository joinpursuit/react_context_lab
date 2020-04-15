import { } from "../actions/actionsTypes";
const WeatherReducer = (state = [], action) => {
  switch (action.type) {
    case :
      return [action.payload, ...state];
    case :
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export default WeatherReducer;

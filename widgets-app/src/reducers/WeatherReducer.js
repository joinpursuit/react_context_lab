import { WEATHER } from '../actions/actionTypes';
const WeatherReducer = (state = [], action) => {
  switch (action.type) {
    case WEATHER: 
      return [...state, action.payload]
    
      default:
        return state;
  }
}
export default WeatherReducer;
 



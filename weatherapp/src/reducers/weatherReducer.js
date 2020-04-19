import  { get_Weather } from '../actions/actionTypes';

const WeatherReducer = (state = [], action) => {
    switch (action.type) {
      case get_Weather:
        return action.payload; 
      default:
        return state;
    }
};

export default WeatherReducer;
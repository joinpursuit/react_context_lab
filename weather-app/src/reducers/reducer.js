// main
//export combineReducers 4 all reducers in one export
import {combineReducers} from "redux";
import WeatherReducer from './WeatherReducer';
import LocationReducer from './LocationReducer';



//combine reducers
const reducers = combineReducers({
    UseWeatherReducer : WeatherReducer,
    UseLocationReducer: LocationReducer,

});


//goes to store
export default reducers;
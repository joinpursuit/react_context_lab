import { SHOW_WEATHER } from '../actions/actionTypes'

const WeatherReducer = (state = [], action) => {
    switch (action.type) {
        case SHOW_WEATHER: 
            return [action.payload, ...state]
        default:
            return state;
    }
}

export default WeatherReducer


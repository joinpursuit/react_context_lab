const WeatherReducer = (state = [], action) => {
    switch (action.type) {
        case GET_WEATHER: 
            return [action.payload, ...state]
        default:
            return state;
    }
}

export default WeatherReducer


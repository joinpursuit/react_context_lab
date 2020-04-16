const WeatherReducer = (state = {
    weather: {}
    }, action) => {
        if(action.type === 'GET_WEATHER') {
            state = {...state, weather: action.payload}
        }
        return state;
};

export default WeatherReducer
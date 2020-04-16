const LocationReducer = (state = {
    location: {}
    }, action) => {
        if(action.type === 'GET_LOCATION') {
            state = {...state, location: action.payload}
        }
        return state;
};

export default LocationReducer;



    
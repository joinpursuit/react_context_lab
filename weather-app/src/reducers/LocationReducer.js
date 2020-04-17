const LocationReducer = (state = [], action) => {
    switch (action.type) {
        case SHOW_LOCATION: 
            return [action.payload, ...state]
        default:
            return state;
    }
}

export default LocationReducer;



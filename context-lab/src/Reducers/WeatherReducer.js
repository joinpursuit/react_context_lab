import {WEATHER} from '../Actions/ActionTypes'
const ClockReducer = (state=0, action)=>{
switch (action.type) {
    case WEATHER:
        return 
        

    default:
        return state;
}


}

export default ClockReducer
import {TIME} from '../Actions/ActionTypes'
const ClockReducer = (state=[], action)=>{
switch (action.type) {
    case TIME:
        return state + new Date().toLocaleString()
        

    default:
        return state;
}


}

export default ClockReducer
import {TIME} from '../Actions/ClockActions'
const ClockReducer = (state=0, action)=>{
switch (action.type) {
    case TIME:
        return state + new Date().toLocaleString()
        

    default:
        return state;
}


}

export default ClockReducer
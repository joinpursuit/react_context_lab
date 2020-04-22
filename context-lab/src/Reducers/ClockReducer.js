import {TIME} from '../Actions/ActionTypes'
const ClockReducer = (state, action) => {
    switch (action.type) {
      case TIME:
        return action.payload;
      default:
        return state;
    }
  };

export default ClockReducer
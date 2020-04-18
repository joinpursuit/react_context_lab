import { CURRENT_TIME } from "../actions/actionTypes";

const ClockReducer = (state, action) => {
  switch (action.type) {
    case CURRENT_TIME:
      return action.payload;
    default:
      return state;
  }
};

export default ClockReducer;

import { THEME } from '../actions/actionTypes'

const ThemeReducer = (state, action) => {
    switch (action.type) {
        case THEME:
            return action.payload
        default:
            return state;
    }
}

export default ThemeReducer;
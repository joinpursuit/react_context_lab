import { THEME } from '../actions/actionTypes'

const ThemeReducer = (state, action) => {
    switch (action.type) {
        case THEME:

        default:
            return state;
    }
}

export default ThemeReducer;
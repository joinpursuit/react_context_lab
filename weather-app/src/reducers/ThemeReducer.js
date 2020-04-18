import { SHOW_THEME } from '../actions/actionTypes'


const ThemeReducer = (state = [], action) => {
    switch (action.type) {
        case 'SHOW_THEME': 
            return {theme: action.theme, ...state}
        case 'REMOVE_THEME': 
            return state.filter(theme => theme.id !== action.theme);
        default: return state;
    }
}


export default ThemeReducer





import { CHANGE_COLOR } from '../actions/themeActions'



const initialState = {
    primaryTheme = 'original'
}


export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_COLOR: 
            return {...state, primaryTheme: action.theme}
    }
}
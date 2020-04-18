import React, { createContext, useReducer } from 'react'
import ThemeReducer from '../reducers/ThemeReducer'
export const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [ themes, dispatch ] = useReducer(ThemeReducer, [
        {id: 1, theme: 'default', selected: true },
        { id: 2, theme: 'HarryPotter', selected: false}

    ]);

    return(
        <ThemeContext.Provider value={{themes, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}





export default ThemeProvider



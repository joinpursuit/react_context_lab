import React, { createContext, useState, useReducer } from "react"
import ThemeReducer from "../reducers/ThemeReducer"
export const ThemeContext = createContext()

const ThemeProvider = (props) => {
    const [ theme, dispatch ] = useReducer(ThemeReducer, theme)
    return (
        <ThemeContext.Provider value={{theme, dispatch}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
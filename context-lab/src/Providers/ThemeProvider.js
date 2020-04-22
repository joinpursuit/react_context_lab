import React from 'react'
export const ThemeContext = createContext('light')

export default(props)=>{
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
}
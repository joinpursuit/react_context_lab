// import React, { createContext, useReducer } from 'react'
import React, { createContext, useState } from 'react'

// import ThemeReducer from '../reducers/ThemeReducer'

export const ThemeContext = createContext('normal');

export default (props) => {
    const [ themes, setThemes ] = useState('normal');

    // const [ themes, setThemes ] = useReducer(ThemeReducer, [
    //     {id: 1, theme: 'default', selected: true },
    //     {id: 2, theme: 'light', selected: false},
    //     {id: 2, theme: 'HarryPotter', selected: false}
    // ]);



      const toggleThemes = () => {
        setThemes(themes === 'normal' ? 'harryPotter' : 'normal')
      }
    // const toggleTheme = (id) => {
    //     setThemes(themes.filter(theme => theme.id !== id))
    // }

    
    return(
        <ThemeContext.Provider value={{themes, toggleThemes}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
















  

















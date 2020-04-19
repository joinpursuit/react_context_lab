import React, { createContext, useState } from 'react';

export const DarkContext = createContext();

const DarkModeProvider = (props) => {
    const [darkMode, setDarkMode] = useState(false)
      const darkModeActivate = () => setDarkMode(true);
      const lightModeActivate = () => setDarkMode(false);
      console.log(darkMode)
      return(
          <DarkContext.Provider value={{darkMode, darkModeActivate, lightModeActivate}}>
            {props.children}
          </DarkContext.Provider>
      )
}

export default DarkModeProvider;
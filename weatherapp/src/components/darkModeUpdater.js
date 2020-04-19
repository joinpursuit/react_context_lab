import React, { useContext } from "react"
import { DarkContext } from "../providers/darkModeProvider"

const DarkModeUpdater = () => {
    const {darkMode, darkModeActivate, lightModeActivate} = useContext(DarkContext)
    
    const handleSubmit = () => {
        debugger
        if(!darkMode){
            darkModeActivate()
        } 
        debugger
    }

    return (
        <>
            <button onClick={handleSubmit}>DarkMode</button>
       </>
    )


}

export default DarkModeUpdater;
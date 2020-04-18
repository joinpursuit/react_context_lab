import React, { useState, useEffect, useContext } from "react"
import { ThemeContext } from "../../providers/ThemeProvider"

const Clock = () => {
    const [ clock , setClock ] = useState(0)
    const { theme } = useContext(ThemeContext)
    let time = new Date().toLocaleString() 

    useEffect(() => {
        let timer = setInterval(() => {
            setClock(time)
        }, 1000)

    }, [clock])

    return (
        <div className={`${theme}`}>
            <div className="clock">
            <h2>{clock}</h2>
            </div>
        </div>
    )
}

export default Clock;
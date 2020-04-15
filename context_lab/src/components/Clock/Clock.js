import React, { useState, useEffect } from "react"

const Clock = () => {
    const [ clock , setClock ] = useState(0)
    let time = new Date().toLocaleString() 
    
    useEffect(() => {

        let timer = setInterval(() => {

            console.log(new Date().toLocaleString())
            setClock(time)
        }, 1000)

    }, [clock])
    return (
        <div>
        <h2>{clock}</h2>
        </div>
    )
}

export default Clock;
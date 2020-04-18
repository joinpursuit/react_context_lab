import React, { useContext } from 'react'
import '../css/Clock.css'
import { ThemeContext } from '../providers/ThemeProvider'

const Clock = (time) => {
    const  { themes } = useContext(ThemeContext)
    // const clockDisplay = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]

    // const [ time, setTime ] = useState;

    const current = new Date().toString()
    // const hour = current.getHours();
    // const minute = current.getMinute();
    

    return (
        <div className={ themes }> 
            <div className="mainDivYeah"> 
                <div className="okayDiv">
                    <h1 className="clockWidget">
                        {current}
                        {/* It is the {hour}'th hour of the day. */}
                        {/* It is the {minute}'th minute of the day. */}
                        {/* In short.... {display} */}
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Clock



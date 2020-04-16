import React, {useState, useEffect, useContext} from 'react'
import {TimeContext} from '../Providers/ClockProvider'
import {time} from '../Actions/ClockActions'
import axios from 'axios'
const ClockUpdater =()=>{
    const { dispatch } = useContext(TimeContext);
    return(
        <div>
            <button>Toggle Clock</button>
        </div>
    )

}

export default ClockUpdater
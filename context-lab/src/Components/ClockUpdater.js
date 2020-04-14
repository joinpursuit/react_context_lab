import React, {useContext} from 'react'
import {CounterContext} from '../Providers/ClockProvider'
import {} from '../Actions/ClockActions'

const ClockUpdater =()=>{
    const { dispatch } = useContext(CounterContext);
    return(
        <div>
            <button>Toggle Clock</button>
        </div>
    )

}

export default ClockUpdater
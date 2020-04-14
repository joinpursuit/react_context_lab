import React, {useContext} from 'react'
import {CounterContext} from '../Providers/WeatherProvider'
import {} from '../Actions/WeatherActions'

const WeatherUpdater =()=>{
    const { dispatch } = useContext(CounterContext);
    return(
        <div>
            <button>Toggle Weather</button>
        </div>
    )

}

export default WeatherUpdater
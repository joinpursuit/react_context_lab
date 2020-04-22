import React, {useContext} from 'react'
import {WeatherContext} from '../Providers/WeatherProvider'
import {weather} from '../Actions/WeatherActions'
import axios from 'axios'


const WeatherUpdater =()=>{
    const { dispatch } = useContext(WeatherContext);
    return(
        <div>
            <button>Toggle Weather</button>
        </div>
    )

}

export default WeatherUpdater
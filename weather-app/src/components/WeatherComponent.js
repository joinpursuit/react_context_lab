import React, { useContext } from 'react'
import '../css/Weather.css'
import WeatherForm from '../components/WeatherForm'
import DisplayWeather from '../components/DisplayWeather'
import { ThemeContext } from '../providers/ThemeProvider' 

const Weather = () => {

    const { themes } = useContext(ThemeContext);
 

    return (
        <div className={ themes }>
            <div className="mainDivYo"> 
                <div className="yurrrDiv">   
                    <h2> Hello, welcome to the waviest weather app! </h2>
                        <div className="enterDiv"> 
                            <h2> Enter a city or state below </h2>
                                <div className="formDiv">      
                                    {/* <WeatherForm/> */}
                                </div>
                        </div> 

                        <div className="weatherDisplay">
                        {/* <DisplayWeather/> */}
                        </div>
                </div>
            </div>
        </div> 

    )

}


export default Weather



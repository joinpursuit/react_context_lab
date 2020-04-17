import React from 'react'
import '../css/Weather.css'
import WeatherForm from '../components/WeatherForm'
import DisplayWeather from '../components/DisplayWeather'

const Weather = () => {
 

    return (

        <div className="mainDivYo"> 

            <div className="yurrrDiv">   
                <h2> Yurr, welcome to the waviest weather app</h2>

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

    )

}


export default Weather



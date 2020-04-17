import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import API_KEY from '../secrets'



const GetWeather = () => {
    // const [ showCity, setShowCity ] = useState([]);
    const [ showWeather, setShowWeather ] = useState('');
    // const [ showCountry, setShowCountry ] = useState('');
    // const [ showDescription, setShowDescription] = useState('');
    // const [ showHumidity, setShowHumidity] = useState('');
    // const [ showIcon, setShowIcon] = useState('');
    // const [ showClouds, setShowClouds] = useState('')
    // const [ showWinds, setShowWinds] = useState('')
    
    // const getAllWeather = (arr) => {
        //     let newArr = [];
        //     arr.forEach(weather => {
            //         newArr.push(weather.city.city)
            //     })
            //     return newArr
            // }
            
            
    const { city, state } = useParams();
    const getWeatherInfo = async (e) => {
    // const city = e.target.elements.city.value;
    // const state = e.target.elements.country.value;
    // e.preventDefault();

    try {
        let res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&appid=${API_KEY}`);
        // let newWeather = getAllWeather(res.city.name)
        // setShowIcon(res.list.weather.icon)
        setShowWeather(res.list.main.temp);

        // setShowDescription(res.list.weather.description)
        // setShowCity([...newWeather]);
        // setShowCountry(state = res.city.country);
        // setShowHumidity(res.main.humidity);
        // setShowClouds(res.list.clouds.all)
        // setShowWinds(res.list.wind.speed)


    } catch (err) {
        console.log(err)
    }
}
    getWeatherInfo()


    return (
        <div className="mainDiv">
            <div className="weatherCard">

                {/* <h2> {showCountry} </h2> */}
                {/* <img className="iconPic" src={showIcon} alt="" /> */}
                <h1> {showWeather} </h1>
                {/* <h3> {showCity} </h3> */}
                {/* <h2> {showDescription} </h2>  */}
                {/* <h2> {showHumidity} </h2> */}
                {/* <h2> {showClouds} </h2> */}
                {/* <h2> {showWinds} </h2> */}
            
            </div> 
        
        
        </div>
    )


};

export default GetWeather;




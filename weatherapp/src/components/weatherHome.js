import React, { useState } from "react"
// import { WeatherContext } from "../providers/weatherProvider"
import * as PostApi from "../util/postApi";


const weather = () => {
    // const [input, setInput] = useState("");
    // const { dispatch } = useContext(WeatherContext);

    // const weatherapi = async() =>{
    //     try {
    //         let res = await PostApi.fetchCurrentWeather(); 
    //         debugger
    //     } catch (err) {
           
    //     }
    // }

    const handleSubmit = () =>{


    }

    // weatherapi()
    return(
        <>
        <h1>Welcome to my weather app</h1>
        {/* <h1>{darkMode? "DarkMode": "Light Mode"}</h1>     */}
        <form>
            <input placeholder="Enter City"></input>
            <button>submit</button>
        </form>
        </>
    )
}

export default weather;
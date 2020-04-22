import React, {useContext} from "react";
import { ModeContext } from "../providers/ModeProvider";

const light = {background: "white"};
const dark = {background : "black"};

const Home = () => {
    const {toggle} = useContext(ModeContext);
    return(
        <div className="Home" style={ toggle ? dark : light }>
            <h2>Hello, welcome to Jovanni's widget app. Here you can check the next 5 day forecast and time. Enjoy!</h2>
        </div>
    )
} 

export default Home;
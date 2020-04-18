import React from "react";
import { func, string } from "prop-types";
import { Button } from "./ButtonStyle";

const Click = ({ toggleTheme}) =>{
    return(
        <Button onClick={toggleTheme}>
        </Button>
    )
};

Click.prototype = {
    theme: string.isRequired,
    toogleTheme: func.isRequired
};

export default Click;


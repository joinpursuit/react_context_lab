import React, {useContext} from "react";
import { ModeContext } from "../providers/ModeProvider";
const light = {background: "white"};
const dark = {background : "black"};

const Toggle = () => {
    const {switchMode, toggle} = useContext(ModeContext);

    return (
        <div style={ toggle ? dark : light }>
            <button onClick={switchMode}>Toggle Light & Dark Mode</button>
        </div>
    )

}

export default Toggle
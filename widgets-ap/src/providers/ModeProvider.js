import React, { createContext, useState } from "react";
export const ModeContext = createContext();

const ModeProvider = (props) => {
    debugger
    const [toggle, setToggle] = useState(false);

    const switchMode = () => {
        setToggle(!toggle)
    }
    return (
        <ModeContext.Provider value ={{switchMode, toggle}}>
            {props.children}
        </ModeContext.Provider>
    )
}

export default ModeProvider;
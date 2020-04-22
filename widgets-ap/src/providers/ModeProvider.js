import React, { createContext, useState } from "react";
export const ModeContext = createContext();

const ModeProvider = (props) => {
    const [toggle, setToggle] = useState(sessionStorage.getItem("DarkMode") === "true");
    // const [toggle, setToggle] = useState(false);

    const switchMode = () => {
        sessionStorage.setItem("DarkMode", !toggle);
        setToggle(previous => !previous);
    }

    return (
        <ModeContext.Provider value ={{switchMode, toggle}}>
            {props.children}
        </ModeContext.Provider>
    )
}

export default ModeProvider;
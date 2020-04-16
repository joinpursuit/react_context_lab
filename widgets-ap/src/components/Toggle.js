import React, {useContext} from "react";
import { ModeContext } from "../providers/ModeProvider";

const Toggle = () => {
    debugger
    const {switchMode} = useContext(ModeContext);

    return (
        <div>
            <button onClick={switchMode}>Toggle Light & Dark Mode</button>
        </div>
    )

}

export default Toggle
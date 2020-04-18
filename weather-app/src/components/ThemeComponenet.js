import React, {useContext, useReducer} from 'react';

// const ThemeContext = React.createContext();
import { ThemeContext } from '../providers/CounterProvider';


const Theme = () => {
    const { theme } = useContext(ThemeContext);
    
    return (
        <div>
            <h1>Themes</h1>
            <h3> {theme}</h3>
        </div>
    )
}

export default Theme; 






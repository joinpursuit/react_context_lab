import React from 'react';
import Clock from 'react-live-clock';


export const Clock = () =>{
    return(
        <div>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'}/>
        </div>
    )
};

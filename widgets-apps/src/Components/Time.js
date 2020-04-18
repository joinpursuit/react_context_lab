import React from 'react';
import Clock from 'react-live-clock';


const Time = () =>{
    return(
        <div>
            <h1>Time of the world</h1>
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'}/>
        </div>
    )
};

export default Time;

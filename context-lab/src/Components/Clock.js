import React from 'react'
import {ThemeContext} from '../Providers/ThemeProvider'
    const Clock = props => {
        const {theme} = useContext(ThemeContext)
        const [date, setDate] = React.useState(new Date());
       React.useEffect(() => {
        var timerID = setInterval( () => tick(), 1000 );
        return function cleanup() {
            clearInterval(timerID);
          };
       });
      
         function tick() {
          setDate(new Date());
         }
      
         return (
            <div>
              <h1>Hello, world!</h1>
              <h2>It is {date.toLocaleTimeString()}.</h2>
            </div>
          );
      
      
}

export default Clock
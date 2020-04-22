import React, { useContext } from 'react';

import { ClockContext } from "../provider/ClockProvider";
// import { setTime } from "../actions/ClockActions"
import { ThemeContext } from "../provider/ThemeProvider"
import '../css/Clock.css';


// export default () => {
//   const { theme } = useContext(ThemeContext)
//   return(
//       <div className={theme}>
//           <h1>Clock Component</h1>       
//       </div>
//   )
// };
const Clock = () => {
  const { theme } = useContext(ThemeContext)
  // const { Clock, dispatch } = useContext(ClockContext);
  
  
  return (
    <div className={theme}>
          <h1>Clock Component</h1>       
    </div>
  )
}
export default Clock;
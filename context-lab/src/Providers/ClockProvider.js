
import React, { useReducer, createContext} from 'react'
import ClockReducer from '../Reducers/ClockReducer'

export const TimeContext = createContext()

const ClockProvider = (props)=>{
    const [time, dispatch] = useReducer(ClockReducer, 0)
    return(  <TimeContext.Provider value={{time, dispatch}}>
        {props.children}
      </TimeContext.Provider>
  )
}
export default ClockProvider
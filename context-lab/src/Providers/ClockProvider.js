import React, { useReducer, createContext} from 'react'

import ClockReducer from '../Reducers/ClockReducer'

export const CounterContext = createContext()

const ClockProvider = (props)=>{
    const [time, dispatch] = useReducer(ClockReducer, 0)
    return(  <CounterContext.Provider value={{time, dispatch}}>
        {props.children}
      </CounterContext.Provider>
  )
}
export default ClockProvider
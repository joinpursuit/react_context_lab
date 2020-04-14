import React, { useReducer, createContext} from 'react'
import CounterReducer from '../Reducers/ClockReducer'
import ClockUpdater from '../Components/ClockUpdater'
export const CounterContext = createContext()

const ClockProvider = (props)=>{
    const [time, dispatch] = useReducer(CounterReducer, 0)
    return(  <CounterContext.Provider value={{count, dispatch}}>
        {props.children}
      </CounterContext.Provider>
  )
}
export default ClockProvider
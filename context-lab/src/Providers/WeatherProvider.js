import React, { useReducer, createContext} from 'react'

import WeatherReducer from '../Reducers/WeatherReducer'

export const CounterContext = createContext()

const WeatherProvider = (props)=>{
    const [weather, dispatch] = useReducer(WeatherReducer, 0)
    return(  <CounterContext.Provider value={{weather, dispatch}}>
        {props.children}
      </CounterContext.Provider>
  )
}
export default WeatherProvider
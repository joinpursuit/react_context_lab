import React, { useReducer, createContext} from 'react'

import WeatherReducer from '../Reducers/WeatherReducer'

export const WeatherContext = createContext()

const WeatherProvider = (props)=>{
    const [weather, dispatch] = useReducer(WeatherReducer, 0)
    return(  <WeatherContext.Provider value={{weather, dispatch}}>
        {props.children}
      </WeatherContext.Provider>
  )
}
export default WeatherProvider
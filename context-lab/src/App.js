import React, {createContext} from 'react';
import './App.css';
import Clock from './Components/Clock'
import Weather from './Components/Weather'
import ClockProvider from './Providers/ClockProvider'
import WeatherProvider from './Providers/WeatherProvider'

function App() {
  return (
    <div className="App">
      <ClockProvider>
    Current Time
      </ClockProvider>
      <WeatherProvider>
        Current Weather
      </WeatherProvider>

    </div>
  );
}

export default App;

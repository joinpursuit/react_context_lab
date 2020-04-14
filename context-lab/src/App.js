import React, {createContext} from 'react';
import './App.css';
import Clock from './Components/Clock'
import Weather from './Components/Weather'
import ClockProvider from './Providers/ClockProvider'

function App() {
  return (
    <div className="App">
      <ClockProvider>
    Current Time
      </ClockProvider>

    </div>
  );
}

export default App;

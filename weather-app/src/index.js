import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/App'
import * as serviceWorker from './serviceWorker';
// import { Browser}

import { Provider } from 'react-redux'
import store from '../src/store/store'


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
    <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// <Router> 
// <App/>

// </Router>

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import thunk from "redux-thunk"; // write action creators -> returns function instead of action
import { applyMiddleware, createStore } from "redux"; 

//add reducers 
import reducers from '../reducers/WeatherReducer'
//middleware
const middleware = applyMiddleware(thunk)

//store 
const store = createStore(reducers, middleware);


export default store;
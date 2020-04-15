import React, { useContext } from "react";
// import { HomeContext } from "./provider/HomeProvider"

const Home = () => {
  // const {Home} = useContext(HomeContext)
  return (
    <div className="Home">
      <h1>Welcome to Bright widget app</h1>
      <h4>Check our five day forecast of the coming weeks!</h4> 
    </div>
  )
}
export default Home;

// import React, {useContext} from 'react';
// import { CounterContext } from '../providers/CounterProvider';
// import { TodosContext } from '../providers/TodosProvider';

// const Counter = () => {
//     const { count } = useContext(CounterContext);
//     const { todos } = useContext(TodosContext);
//     // console.log(todos)
//     return (
//         <div>
//             <h1>Counter</h1>
//             <h3>Count {count}</h3>
//         </div>
//     )
// }

// export default Counter; 


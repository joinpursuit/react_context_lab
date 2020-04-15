import React from "react";
const Home = () => {
  return (
    <home className="home">
      <NavLink className="route" exact to={"/"}>Home</NavLink>
      <h1>Welcome to Bright widget app</h1>
      <h4>Check our five day forecast of the coming weeks!</h4>
    </home>
  )
}
export default Home;
// import React, { useState, useEffect } from "react";

// // class NewClock extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = { time: new Date().toLocaleString().slice(14, 18) };
// //   }
// //   componentDidMount() {
// //     this.timer = setInterval(() => {
// //       this.setState({ time: new Date().toLocaleString().slice(14, 18) });
// //     }, 1000);
// //   }

// //   componentWillUnmount() {
// //     clearInterval(this.timer);
// //   }

// //   render() {
// //     return (
// //       <span >
// //         {this.state.time}
// //       </span>
// //     );
// //   }
// // }

// const NewClock = () => {
//   const [time, setTime] = useState(new Date().toLocaleString().slice(14, 18));

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date().toLocaleString().slice(14, 18));
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   console.log(time);

//   return <span style={{ color: "#5f6c7b", fontWeight: "unset" }}>{time}</span>;
// };

// export default NewClock;

import React, { useContext, useEffect } from "react";
import { currentTime } from "../actions/clockActions";
import { ClockContext } from "../providers/ClockProvider";

const Clock = () => {
  const { time, dispatch } = useContext(ClockContext);

  useEffect(() => {
    dispatch(currentTime());
  }, []);

  return (
    <>
      {time ? (
        <div className="clock">
          <h1>DATE</h1>
          {time.today.toDateString()}
          <h1>CLOCK</h1>
          {time.time}
        </div>
      ) : null}
    </>
  );
};
export default Clock;

import React, { useContext, useEffect } from "react";
import { currentTime } from "../actions/clockActions";
import { ClockContext } from "../providers/ClockProvider";
import { ThemeContext } from "../providers/ToggleProvider";

const Clock = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const { time, dispatch } = useContext(ClockContext);

  useEffect(() => {
    dispatch(currentTime());
  }, []);
  return (
    <>
      {time ? (
        <div className={theme}>
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

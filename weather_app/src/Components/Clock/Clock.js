import React from "react";
import "./Css/clock.css";
import Clock from "react-live-clock";

import Days from "../Days/Days.js";

const Clockk = () => {
  return (
    <div className="clockApp">
      <div className="clockWrap">
        <div className="clockContainer">
          <div className="clockTime">
            <div className="towrap" id="clockDays">
              <Days />
            </div>
            <div className="towrap">
              <p id="clockTimeP">
                <Clock
                  format={"hh:mm:ss"}
                  ticking={true}
                  timezone={"US/Eastern"}
                />
                <span className="clockSpan">
                  <Clock format={"A"} ticking={true} timezone={"US/Eastern"} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clockk;

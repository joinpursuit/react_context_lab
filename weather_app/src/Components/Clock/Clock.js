import React from "react";
import "./Css/clock.css";
import Clock from "react-live-clock";
const Clockk = () => {
  return (
    <div className="clockApp">
      <div className="clockContainer">
        <div className="clockTime">
          <div className="clockWrap">
            <div className="towrap" id="clockDays">
              <p id="clockP">MON</p>
              <p id="clockP">TUE</p>
              <p id="clockP">WED</p>
              <p id="clockP">THU</p>
              <p id="clockP">FRI</p>
              <p id="clockP">SAT</p>
              <p id="clockP">SUN</p>
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

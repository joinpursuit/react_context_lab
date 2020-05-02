import React from "react";
import "./Css/clock.css";

const Clock = () => {
  return (
    <div className="clockApp">
      <div className="clockContainer">
        <div className="clockTime">
          <div className="clockDays">
            <p className="clockP">MON</p>
            <p className="clockP">TUE</p>
            <p className="clockP">WED</p>
            <p className="clockP">THU</p>
            <p className="clockP">FRI</p>
            <p className="clockP">SAT</p>
            <p className="clockP">SUN</p>
          </div>
          <div>
            <p className="clockTimeP">
              08:30:20
              <span className="clockSpan">PM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;

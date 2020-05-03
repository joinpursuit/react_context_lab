import React from "react";
import moment from "moment";

const Days = () => {
  let arr = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  let today = moment().format("ddd").toUpperCase();
  return arr.map((day) => {
    return day === today ? (
      <p key={today} id="clockPP">
        {today}
      </p>
    ) : (
      <p key={day} id="clockP">
        {day}
      </p>
    );
  });
};

export default Days;

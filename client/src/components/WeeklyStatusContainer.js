import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { weeklyStatus } from "../helpers/weeklyStatus";
import { calculateDailyHours } from "../helpers/calculateDailyHours";

const WeeklyHours = ({ weekday }) => {
  const [clockIn, setClockIn] = useState("08:00");
  const [clockOut, setClockOut] = useState("16:30");
  const [dailyHours, setDailyHours] = useState("0");

  const { id, day, isActive, hrs } = weekday;

  useEffect(() => {
    // update the hours worked when time is updated
    const lunch = "30"; // future feature
    const PTO = "0"; // future feature
    const totalHrs = calculateDailyHours(clockIn, clockOut);
    setDailyHours(totalHrs);
  }, [clockIn, clockOut, setDailyHours]);

  return (
    <div>
      <h4>{day}</h4>
      <label htmlFor="clockIn">
        Clocked In:
        <input
          id="clockIn"
          type="time"
          value={clockIn}
          onChange={(e) => {
            setClockIn(e.target.value);
          }}
        />
      </label>

      <label htmlFor="clockOut">
        Clocked Out:
        <input
          id="clockOut"
          type="time"
          value={clockOut}
          onChange={(e) => {
            setClockOut(e.target.value);
          }}
        />
      </label>

      <label htmlFor="hoursWorked">
        Hours Worked:
        <input
          readOnly={true}
          id="hoursWorked"
          type="number"
          value={dailyHours}
        />
      </label>
    </div>
  );
};

const WeeklyStatusContainer = () => (
  <div>
    {weeklyStatus.map((dailyStatus) =>
      dailyStatus.isActive ? (
        <WeeklyHours key={dailyStatus.id} weekday={dailyStatus} />
      ) : null
    )}
  </div>
);
export default WeeklyStatusContainer;

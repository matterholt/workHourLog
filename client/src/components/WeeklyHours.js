import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { calculateDailyHours } from "../helpers/calculateDailyHours";

import {
  hourInput,
  hourInput__container,
  hourInput__day,
} from "./style/weeklyHour.style";

export default function WeeklyHours({ weekday, updateStatus }) {
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

  function handleHrUpdate(e) {
    setClockIn(e.target.value);
    updateStatus({ id, day, dailyHours });
  }

  // useReducer update the
  return (
    <div>
      <div css={hourInput__container}>
        <h4 css={hourInput__day}>{day}</h4>
        <label htmlFor="clockIn" css={hourInput}>
          Clocked In:
          <input
            id="clockIn"
            type="time"
            value={clockIn}
            onChange={handleHrUpdate}
          />
        </label>

        <label htmlFor="clockOut" css={hourInput}>
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

        <label htmlFor="hoursWorked" css={hourInput}>
          Hours Worked:
          <input
            style={{ width: "120px" }}
            readOnly={true}
            id="hoursWorked"
            type="text"
            value={dailyHours}
          />
        </label>
      </div>
    </div>
  );
}

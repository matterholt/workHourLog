import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { calculateDailyHours } from "../helpers/calculateDailyHours";

import {
  hourInput,
  hourInput__container,
  hourInput__day,
} from "./style/weeklyHour.style";

export default function DailyHourLog
  ({ weekday, updateStatus, defaultHours }) {
  
  const { id, day, isActive } = weekday;
  const { clockIn, clockOut, hourWorked, lunch } = defaultHours
  
  const [dailyClockIn, setDailyClockIn] = useState(clockIn);
  const [dailyClockOut, setDailyClockOut] = useState(clockOut);
  const [dailyHours, setDailyHours] = useState(hourWorked);

  useEffect(() => {
  // issue on having the updateStatus in the effect dependance where is updates too much
    // useCallback or useMemo ???
     function savedata() {
    console.log('update the miang')
     updateStatus({id,dailyHours})
    }
    savedata()

  },[dailyHours,id])

  useEffect(() => {
    // update the hours worked when time is updated

    const lunch = "30"; // future feature
    const PTO = "0"; // future feature
    const totalHrs =  calculateDailyHours(dailyClockIn, dailyClockOut);
       setDailyHours(totalHrs);
  }, [dailyClockIn, dailyClockOut, setDailyHours]);

  return (
    <div>
      <div css={hourInput__container}>
        <h4 css={hourInput__day}>{day}</h4>
        <label htmlFor="dailyClockIn" css={hourInput}>
          Clocked In:
          <input
            id="dailyClockIn"
            type="time"
            value={dailyClockIn}
            onChange={(e) => {
              setDailyClockIn(e.target.value);
            }}
          />
        </label>

        <label htmlFor="dailyClockOut" css={hourInput}>
          Clocked Out:
          <input
            id="dailyClockOut"
            type="time"
            value={dailyClockOut}
            onChange={(e) => {
              setDailyClockOut(e.target.value);
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

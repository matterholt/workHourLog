import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import {
  calculateDailyHours,
} from "../helpers/calculateDailyHours";

import {
  hourInput,
  hourInput__container,
  hourInput__day,
} from "./style/weeklyHour.style";

export default function DailyHourLog
  ({ weekday, logHoursOfDay, defaultHours }) {
  const { id, day, isActive } = weekday;
  const [ inputIsActive, setIsInputActive]  = useState({
    dailyClockIn: false,
    dailyClockOut: false,
    hoursWorked: false
  });
  const [punchIn, setPunchIn] = useState('')
  const [punchOut, setPunchOut] = useState('');
  const [hourWorked, sethourWorked] = useState(8);
  
  function handlePunchIn(e) {
    const { id, value } = e.target
    setIsInputActive({ ...inputIsActive, [id]: true })
    const [hr, min] = value.split(":");
    const projectedPunchOut = `${Number(hr) + hourWorked}:30`;
    setPunchOut(projectedPunchOut);
    setPunchIn(value)
  }

  function handlePunchOut(e) {
    // function needs to be cleaned up
    const { value } = e.target;
    if (!inputIsActive.dailyClockIn) {
      // If the the punch in value has not been active then will auto update time in.
      const [hr, min] = value.split(":");
      const projectedPunchOut = `0${Number(hr) - hourWorked}:00`;
      setPunchIn(projectedPunchOut);
      setPunchOut(value);
    } else {
      setPunchOut(value);
      sethourWorked(calculateDailyHours(punchIn, value));
    }
    

  }
  useEffect(() => {
    console.log(inputIsActive);
  }, [inputIsActive]);
  



  return (
    <div>
      <div css={hourInput__container}>
        <h4 css={hourInput__day}>{day}</h4>
        <label htmlFor="dailyClockIn" css={hourInput}>
          Clocked In:
          <input
            id="dailyClockIn"
            type="time"
            value={punchIn}
            onChange={handlePunchIn}
          />
        </label>

        <label htmlFor="dailyClockOut" css={hourInput}>
          Clocked Out:
          <input
            id="dailyClockOut"
            type="time"
            value={punchOut}
            onChange={handlePunchOut}
          />
        </label>

        <label htmlFor="hoursWorked" css={hourInput}>
          Hours Worked:
          <input
            style={{ width: "120px" }}
            readOnly={true}
            id="hoursWorked"
            type="text"
            value={hourWorked}
          />
        </label>
      </div>
    </div>
  );
}

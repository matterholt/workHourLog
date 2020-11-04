import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";


import {
  calculateDailyHours,
} from "../helpers/calculateDailyHours";
import { projectTimeLogged } from "../helpers/projectTimeLogged";

import {
  hourInput,
  hourInput__container,
  hourInput__day,
  activeInput,
} from "./style/weeklyHour.style";

export default function DailyHourLog({
  weekday,
  defaultHours,
  updateWeeklyHours,
}) {
  const { id, day, isActive } = weekday;
  const [inputIsActive, setIsInputActive] = useState({
    dailyClockIn: false,
    dailyClockOut: false,
    hoursWorked: false,
  });

  const [punchIn, setPunchIn] = useState(defaultHours.punchIn);
  const [punchOut, setPunchOut] = useState(defaultHours.punchOut);
  
  const [hourWorked, setHourWorked] = useState(defaultHours.hourWorked);
  useEffect(() => {
    updateWeeklyHours({ id, hourWorked });
  }, [id, hourWorked]);

  function setIsActive(elemID, value = null) {
    let switchValue = value === null ? !inputIsActive.elemID : value;
    setIsInputActive({
      ...inputIsActive,
      [elemID]: switchValue,
    });
  }

  function handlePunchIn(e) {
    const { value } = e.target;
    setPunchIn(value);
    const projectedPunchOutTime = projectTimeLogged(value, hourWorked);
    setPunchOut(projectedPunchOutTime);
  }

  function handlePunchOut(e) {
    const { value } = e.target;
    setPunchOut(value);
    setHourWorked(calculateDailyHours(punchIn, value));
  }

  function handleSetHoursWorked(e) {
    const { value } = e.target;
    setHourWorked(value);
    const projectedPunchOutTime = projectTimeLogged(punchIn, value);
    setPunchOut(projectedPunchOutTime);
  }

  return (
    <div>
      <div css={hourInput__container}>
        <h4 css={hourInput__day}>{day}</h4>
        <label htmlFor="dailyClockIn" css={hourInput}>
          Clocked In:
          <input
            css={inputIsActive.dailyClockIn ? null : activeInput}
            id="dailyClockIn"
            type="time"
            value={punchIn}
            onChange={handlePunchIn}
            onClick={(e) => setIsActive(e.target.id)}
          />
        </label>

        <label htmlFor="dailyClockOut" css={hourInput}>
          Clocked Out:
          <input
            css={inputIsActive.dailyClockOut ? null : activeInput}
            id="dailyClockOut"
            type="time"
            value={punchOut}
            onChange={handlePunchOut}
            onClick={(e) => setIsActive(e.target.id)}
          />
        </label>

        <label htmlFor="hoursWorked" css={hourInput}>
          Hours Worked:
          <input
            css={inputIsActive.hoursWorked ? null : activeInput}
            readOnly={!inputIsActive.hoursWorked}
            id="hoursWorked"
            type="number"
            min="0.0"
            step=".1"
            value={hourWorked}
            onChange={handleSetHoursWorked}
            onClick={(e) => setIsActive(e.target.id)}
          />
        </label>
      </div>
    </div>
  );
}

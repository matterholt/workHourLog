import React, { useState, useEffect,useReducer } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { calculateDailyHours } from "../helpers/calculateDailyHours";

import {
  hourInput,
  hourInput__container,
  hourInput__day,
} from "./style/weeklyHour.style";

function calculateHours(state) {
  const {dailyClockIn,dailyClockOut }=state
  const totalHrs =  calculateDailyHours(dailyClockIn, dailyClockOut);
      return totalHrs
}

function updateTimeLogReducer(state, action) {
  switch (action.type) {
    case 'punchIn':
      return {...state, dailyClockIn:action.value};
    case 'punchOut':
      return {...state, dailyClockOut:action.value};
    default: throw new Error('Unexpected action');
  }
}

export default function DailyHourLog
  ({ weekday, logHoursOfDay, defaultHours }) {
  const { id, day, isActive } = weekday;
  const { clockIn, clockOut, hourWorked, lunch } = defaultHours

  const initialState = { dailyClockIn: clockIn, dailyClockOut: clockOut}
  const [state, dispatch] = useReducer(updateTimeLogReducer, initialState)
  const [dailyHours, setDailyHours] = useState(hourWorked);

  useEffect(() => {
    setDailyHours(calculateHours(state))
  }, [state, calculateHours])
  
    useEffect(() => {
      logHoursOfDay({dailyHours,id})
  },[dailyHours,id])

  return (
    <div>
      <div css={hourInput__container}>
        <h4 css={hourInput__day}>{day}</h4>
        <label htmlFor="dailyClockIn" css={hourInput}>
          Clocked In:
          <input
            id="dailyClockIn"
            type="time"
            value={state.dailyClockIn}
            onChange={(e) => dispatch({ type: 'punchIn', value:e.target.value })}
          />
        </label>

        <label htmlFor="dailyClockOut" css={hourInput}>
          Clocked Out:
          <input
            id="dailyClockOut"
            type="time"
            value={state.dailyClockOut}
            onChange={(e) => dispatch({ type: 'punchOut', value:e.target.value })}
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

import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";


import {
  calculateDailyHours,
} from "../helpers/calculateDailyHours";
import { convertPercentHrToTime } from '../helpers/convertPercentHrToTime'
import { convertTimePercentTime } from "../helpers/convertTimePercentTime";

import {
  hourInput,
  hourInput__container,
  hourInput__day,
  activeInput,
} from "./style/weeklyHour.style";

export default function DailyHourLog
  ({ weekday, logHoursOfDay, defaultHours }) {
  const { id, day, isActive } = weekday;
  const [ inputIsActive, setIsInputActive]  = useState({
    dailyClockIn: false,
    dailyClockOut: false,
    hoursWorked: false
  });
  const [punchIn, setPunchIn] = useState( defaultHours.punchIn);
  const [punchOut, setPunchOut] = useState(defaultHours.punchOut);
  const [hourWorked, sethourWorked] = useState('8.0');

  // Add a LOCKED to allow Hard Time sets


  function setIsActive(elemID, value = null) {
    // updates the active input values 
    // can be a useHook function ??
    let switchValue = value ? value : !inputIsActive.elemID;
      setIsInputActive({
          ...inputIsActive,
          [elemID]: switchValue,
        });
  }

  function handlePunchIn(e) {
    // NEED TO IMPROVE CODE AND REMOVE FUNCTIONS OUT OF COMPONENT
    const { id, value } = e.target
    const [hr, min] = value.split(":");

    setIsActive("dailyClockOut", true);
    const [totalHr, totaldec] = hourWorked.split(".");
    const projectedPunchOut = `${Number(hr) + Number(totalHr)}:${min}`; //hacky,
    setPunchOut(projectedPunchOut);
    setPunchIn(value)
  }

  function handlePunchOut(e) {
    const { id, value } = e.target;
    // function needs to be cleaned up
    // NEED TO IMPROVE CODE AND REMOVE FUNCTIONS OUT OF COMPONENT
    setIsActive("hoursWorked", true);
    setPunchOut(value);
    sethourWorked(calculateDailyHours(punchIn, value));
  }


  function handleSetHoursWorked(e) {
    const { id, value } = e.target;
    // set hours wish to work then will auto update the time that is able to leave
    sethourWorked(value);

    // convert punch in time to percent value
    const punchInPercentHr = convertTimePercentTime(punchIn);
    // estimate punch out time base on hours worked
    const projectedPunchOutPercentHr = punchInPercentHr + Number(value);
    // the calculated value to convert to a punch out time

    const projectedPunchOutTime = convertPercentHrToTime(
      projectedPunchOutPercentHr
    );
    setIsActive("dailyClockOut", false);
    setPunchOut(projectedPunchOutTime);
  }

// help debug  
  useEffect(() => {
    // console.log(hourWorked);
    // console.log(punchOut);
    // console.log(inputIsActive);
  }, [inputIsActive, punchOut, hourWorked]);
  

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

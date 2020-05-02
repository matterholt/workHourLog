import React, { useState, useEffect } from "react";

import styled from "@emotion/styled";
import calculateDailyHours from "../logic/hoursCal";

import TimeInputs from "../components/style/TimeInputs";

import { twelveHrCovert } from "../logic/hourConvert";

// styles for list table
const Rows = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: start;
  border: solid aliceblue;
  background-color: white;
  width: 100%;
`;

const UnEditablHr = (props) => {
  const quitTime = twelveHrCovert(props.dailyHrs.quit);
  return (
    <>
      <TimeInputs>{props.dailyHrs.day}</TimeInputs>
      <TimeInputs>{props.dailyHrs.start}</TimeInputs>
      <TimeInputs>{quitTime} </TimeInputs>
      <TimeInputs>{props.dailyHrs.hrsWork}</TimeInputs>
    </>
  );
};
const EditableHr = (props) => {
  const [timeStart, updateTimeStart] = useState("");
  const [timeEnd, updateTimeEnd] = useState("");
  const [hoursWorked, updateHoursWorked] = useState("");

  useEffect(() => {
    updateTimeStart(props.dailyHrs.start);
    updateTimeEnd(props.dailyHrs.quit);
    updateHoursWorked(props.dailyHrs.hrsWork);
  }, []);

  function handleChange() {
    // make the punch time a object which can be update with  an on change
    //
  }

  return (
    <>
      <TimeInputs>{props.dailyHrs.day}</TimeInputs>
      <input
        type="time"
        onChange={(e) => updateTimeStart(e.target.value)}
        value={timeStart}
      />
      <input
        type="time"
        onChange={(e) => updateTimeEnd(e.target.value)}
        value={timeEnd}
      />
      <TimeInputs>{hoursWorked}</TimeInputs>
    </>
  );
};

export const DailyHourWork = ({ dailyHrs, dayKey, handelHrUpdate }) => {
  const [ableUpdateHrs, seAbleUpdateHrs] = useState(false);

  function changeHrs() {
    // update the values here!

    console.log("worked");
    handelHrUpdate(dayKey);
  }

  return (
    <Rows key={dayKey}>
      {ableUpdateHrs ? (
        <EditableHr dailyHrs={dailyHrs} />
      ) : (
        <UnEditablHr dailyHrs={dailyHrs} />
      )}
      <button onClick={() => seAbleUpdateHrs(!ableUpdateHrs)}>
        {ableUpdateHrs ? "OK" : "EDIT"}
      </button>
    </Rows>
  );
};

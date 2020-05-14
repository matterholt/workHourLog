import React, { useState, useEffect, useContext } from "react";

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
const HourForm = styled.form`
  display: flex;
  background: lightgray;
`;

const UnEditablHr = (props) => {
  const quitTime = twelveHrCovert(props.dailyHrs.quit);
  return (
    <>
      <TimeInputs>{props.dailyHrs.day}</TimeInputs>
      <TimeInputs>{props.dailyHrs.start}</TimeInputs>
      <TimeInputs>{quitTime} </TimeInputs>
      <TimeInputs>{props.dailyHrs.hrsWork}</TimeInputs>
      <button onClick={props.handleToggle}>EDIT</button>
    </>
  );
};

const EditableHr = (props) => {
  // context for hours?

  const [hoursWorked, updateHoursWorked] = useState("");
  const [clockedTime, updateClockTime] = useState({
    punchIn: "",
    punchOut: "",
  });

  useEffect(() => {
    updateClockTime({
      punchIn: props.dailyHrs.start,
      punchOut: props.dailyHrs.quit,
    });
    updateHoursWorked(props.dailyHrs.hrsWork);
  }, []);

  function handleChange(e) {
    // what if we update the context here,
    //
    const inputKey = e.target.name;
    const inputValue = e.target.value;

    updateClockTime({ ...clockedTime, [inputKey]: inputValue });

    const { punchIn, punchOut } = clockedTime;

    const workingHour = calculateDailyHours(punchIn, punchOut);
    updateHoursWorked(workingHour);
    // save to the context
  }

  function saveToContext(event) {
    event.preventDefault();
    const changeHours = {
      day: props.dailyHrs.day,
      hrsWork: hoursWorked,
      quit: clockedTime.punchOut,
      start: clockedTime.punchIn,
    };
    props.handelHrUpdate(changeHours);
    props.handleToggle();
  }

  return (
    <HourForm onSubmit={saveToContext}>
      <TimeInputs>{props.dailyHrs.day}</TimeInputs>

      <input
        type="time"
        name="punchIn"
        onChange={(e) => handleChange(e)}
        value={clockedTime.punchIn}
      />
      <input
        type="time"
        name="punchOut"
        onChange={(e) => handleChange(e)}
        value={clockedTime.punchOut}
      />

      <TimeInputs>{hoursWorked}</TimeInputs>
      <button type="submit">OK</button>
    </HourForm>
  );
};

export const DailyHourWork = ({ dailyHrs, dayKey, handelHrUpdate }) => {
  const [ableUpdateHrs, setAbleUpdateHrs] = useState(false);

  const handleToggle = () => {
    setAbleUpdateHrs(!ableUpdateHrs);
  };

  return (
    <Rows key={dayKey}>
      {ableUpdateHrs ? (
        <EditableHr
          dailyHrs={dailyHrs}
          handelHrUpdate={handelHrUpdate}
          handleToggle={handleToggle}
        />
      ) : (
        <UnEditablHr dailyHrs={dailyHrs} handleToggle={handleToggle} />
      )}
    </Rows>
  );
};

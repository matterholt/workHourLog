import React, { useContext } from "react";
import { DefaultHrContext } from "../context/DefaultHrContext";

import styled from "@emotion/styled";

import TimeInputs from "../components/style/TimeInputs";
import ActionButton from "../components/style/ActionButton";

const ChangeTime = (props) => {
  return <TimeInputs type="time" value={props.time} />;
};
// styles for list table
const Rows = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: start;
  border: solid aliceblue;
  background-color: white;
  width: 100%;
`;

const UList = styled.ul`
  margin: 0;
  padding: 0;
  min-width: 100vw;
`;

const DailyWorking = ({ day, dayKey }) => {
  const { workingHrs } = useContext(DefaultHrContext);

  function changeInput() {
    console.log("worked");
  }
  return (
    <Rows key={dayKey}>
      <p>{day}</p>
      <TimeInputs type="time" onClick={changeInput} value={workingHrs.start} />
      <TimeInputs type="time" onClick={changeInput} value={workingHrs.quit} />
      <p>8 hrs</p>
    </Rows>
  );
};

// TODO:
// CLICK ON INPUT THEN ABLE TO EDDIT TIME.
export const WeeklyHours = () => {
  const daysOfWk = [
    {
      day: "Mon",
      inTime: "7:00",
      outTime: "16:30",
      hrWorked: "8",
    },
  ];

  return (
    <UList>
      {daysOfWk.map((dayInput, dayKey) => {
        return <DailyWorking day={dayInput.day} dayKey={dayKey} />;
      })}
    </UList>
  );
};

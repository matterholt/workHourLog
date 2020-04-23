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
const RoWData = styled.p`
  background: #8690e1;
  width: 100px;
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
      <RoWData>{day}</RoWData>
      <TimeInputs type="time" onClick={changeInput} value={workingHrs.start} />
      <TimeInputs type="time" onClick={changeInput} value={workingHrs.quit} />
      <RoWData>8 hrs</RoWData>
      <ActionButton>Edit</ActionButton>
    </Rows>
  );
};

// TODO:
// CLICK ON INPUT THEN ABLE TO EDDIT TIME.
export const WeeklyHours = () => {
  const daysOfWk = ["Mon", "Tues", "Weds", "Thurs", "Fri"];

  return (
    <UList>
      {daysOfWk.map((day, dayKey) => {
        return <DailyWorking day={day} dayKey={dayKey} />;
      })}
    </UList>
  );
};

import React, { useContext } from "react";
import { DefaultHrContext } from "../context/DefaultHrContext";

import styled from "@emotion/styled";

import TimeInputs from "../components/style/TimeInputs";

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

// TODO:
// CLICK ON INPUT THEN ABLE TO EDDIT TIME.
export const WeeklyHours = () => {
  const daysOfWk = ["Mon", "Tues", "Weds", "Thurs", "Fri"];
  const { workingHrs } = useContext(DefaultHrContext);
  const weekLog = daysOfWk.map((day, dayKey) => {
    function changeInput() {
      console.log("worked");
    }
    return (
      <Rows key={dayKey}>
        <RoWData>{day}</RoWData>
        <TimeInputs
          readOnly={true}
          type="time"
          onClick={changeInput}
          value={workingHrs.start}
        />
        <RoWData>{workingHrs.quit}</RoWData>
        <RoWData>8 hrs</RoWData>
      </Rows>
    );
  });

  return <UList>{weekLog}</UList>;
};

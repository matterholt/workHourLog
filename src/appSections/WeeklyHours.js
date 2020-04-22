import React, { useContext } from "react";

import { DefaultHrContext } from "../context/DefaultHrContext";

import styled from "@emotion/styled";

import TimeInputs from "../components/style/TimeInputs";

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
    return (
      <Rows key={dayKey}>
        <RoWData>{day}</RoWData>
        <TimeInputs value={workingHrs.start}></TimeInputs>
        <TimeInputs value={workingHrs.quit}></TimeInputs>
        <RoWData>8 hrs</RoWData>
      </Rows>
    );
  });

  return <UList>{weekLog}</UList>;
};

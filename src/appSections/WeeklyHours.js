import React, { useContext } from "react";

import { DefaultHrContext } from "../context/DefaultHrContext";

import styled from "@emotion/styled";

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
const TimeInput = (props) => {
  return <span type="time">{props.time}</span>;
};

export const WeeklyHours = () => {
  const daysOfWk = ["Mon", "Tues", "Weds", "Thurs", "Fri"];
  const { workingHrs } = useContext(DefaultHrContext);
  const weekLog = daysOfWk.map((day, dayKey) => {
    return (
      <Rows key={dayKey}>
        <RoWData>{day}</RoWData>
        <RoWData>
          <TimeInput time={workingHrs.start} />
        </RoWData>
        <RoWData>
          <TimeInput time={workingHrs.quit} />
        </RoWData>
        <RoWData>8 hrs</RoWData>
      </Rows>
    );
  });

  return <UList>{weekLog}</UList>;
};

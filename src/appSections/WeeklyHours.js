import React, { useContext } from "react";

import { DefaultHrContext } from "../context/DefaultHrContext";
import { WeekHourLogContext } from "../context/WeekHourLogContext";

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

const UList = styled.ul`
  margin: 0;
  padding: 0;
  min-width: 100vw;
`;

const DailyWorking = ({ dailyHrs, dayKey }) => {
  function changeInput() {
    console.log("worked");
  }
  return (
    <Rows key={dayKey}>
      <TimeInputs>{dailyHrs.day}</TimeInputs>
      <TimeInputs onClick={changeInput}>{dailyHrs.start}</TimeInputs>
      <TimeInputs onClick={changeInput}>{dailyHrs.quit} </TimeInputs>
      <TimeInputs>{dailyHrs.hrsWork}</TimeInputs>
    </Rows>
  );
};

// TODO:
// CLICK ON INPUT THEN ABLE TO EDDIT TIME.
export const WeeklyHours = () => {
  const { weekHrLog } = useContext(WeekHourLogContext);

  return (
    <UList>
      {weekHrLog.map((dayInput, dayKey) => {
        return <DailyWorking dailyHrs={dayInput} dayKey={dayKey} />;
      })}
    </UList>
  );
};

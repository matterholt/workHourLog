import React, { useState, useContext } from "react";

import Header from "./components/Header";

import { UpdateDefaultTime } from "./modals/UpdateDefaultTime";

import { DefaultHrContext } from "./context/DefaultHrContext";

import styled from "@emotion/styled";
import "./style/WkDay.css";

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
  return <input value={props.time} />;
};

const WeeklyHours = (props) => {
  const daysOfWk = ["Mon", "Tues", "Weds", "Thurs", "Fri"];
  const { workingHrs, SetWorkingHrs } = useContext(DefaultHrContext);
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

const App = () => {
  // convert to useReducer
  const [workingHrs, SetWorkingHrs] = useState({
    start: "07:00",
    quit: "16:00",
    lunch: 0.5,
  });

  return (
    <DefaultHrContext.Provider value={{ workingHrs, SetWorkingHrs }}>
      <Header />
      <UpdateDefaultTime />
      <WeeklyHours />
    </DefaultHrContext.Provider>
  );
};

export default App;

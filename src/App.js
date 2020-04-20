import React, { useState } from "react";

import Header from "./components/Header";

import styled from "@emotion/styled";
import "./style/WkDay.css";

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
  const weekLog = daysOfWk.map((day, dayKey) => {
    return (
      <Rows key={dayKey}>
        <RoWData>{day}</RoWData>
        <RoWData>
          <TimeInput time={props.hours.start} />
        </RoWData>
        <RoWData>
          <TimeInput time={props.hours.quit} />
        </RoWData>
        <button>Edit</button>
      </Rows>
    );
  });
  return <UList>{weekLog}</UList>;
};

const App = () => {
  const [defaultHours, updateDefaultHours] = useState({
    start: "07:00",
    quit: "16:00",
    lunch: 0.5,
  });
  return (
    <div>
      <Header />
      <WeeklyHours hours={defaultHours} />
    </div>
  );
};

export default App;

import React, { useState } from "react";
import AddHour from "./componets/AddHour";
import ToggleButton from "./componets/ToggleButton";
import DailyHourChart from "./componets/DailyHourChart";
import "./style/WkDay.css";
import styled from "@emotion/styled";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 550px;
  position: relative;
  margin: 10px;
`;

const AddNewHours = props => {
  return <ToggleButton toggle={props.toggle}>Add Hours</ToggleButton>;
};

const App = () => {
  const [inputModal, switchInputModal] = useState(false);
  const [hourLog, upDateHourLog] = useState(undefined);

  function toggleSwitch() {
    switchInputModal(!inputModal);
  }
  return (
    <div className="week">
      <HeaderDiv>
        <h1>Weekly Hours</h1>
        {inputModal ? (
          <AddHour toggle={toggleSwitch} />
        ) : (
          <AddNewHours toggle={toggleSwitch} />
        )}
      </HeaderDiv>
      <DailyHourChart />
    </div>
  );
};

export default App;

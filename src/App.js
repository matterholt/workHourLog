import React, { useState, useEffect } from "react";
import AddHour from "./componets/AddHour";
import ToggleButton from "./componets/ToggleButton";
import DailyHourChart from "./componets/DailyHourChart";
import SettingUser from "./componets/SettingUser";
import "./style/WkDay.css";
import styled from "@emotion/styled";

const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 550px;
  position: relative;
  margin: 10px;
  background: white;
  grid-column: 1/3;
  grid-column: 1/4;
`;
const Nav = styled.nav`
  display: flex;
  flex-flow: column;
  align-content: center;
  background-color: white;
  padding: 25px;
  grid-column: 1;
  grid-row: 2/3;
`;

const AddNewHours = props => {
  return <ToggleButton toggle={props.toggle}>Add Hours</ToggleButton>;
};
const ChangeSettings = props => {
  return <ToggleButton toggle={props.toggle}>Change Settings</ToggleButton>;
};

const App = () => {
  const [inputModal, switchInputModal] = useState(false);
  const [settingModal, switchSettingModal] = useState(false);
  const [hourLog, upDateHourLog] = useState([]);
  const [userSettings, setUserSettings] = useState({
    username: "",
    startTime: "",
    endTime: "",
    lunchTime: "0.5"
  });

  function toggleSwitch() {
    console.log("fire");
    switchInputModal(!inputModal);
  }
  function toggleSwitch2() {
    // not good, need better
    console.log(userSettings);
    switchSettingModal(!settingModal);
  }
  function setSettings(e) {
    setUserSettings({
      ...userSettings,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="week">
      <Nav>
        {inputModal ? (
          <>
            <AddHour toggle={toggleSwitch} />
            <AddNewHours toggle={toggleSwitch} />
          </>
        ) : (
          <AddNewHours toggle={toggleSwitch} />
        )}

        {settingModal ? (
          <SettingUser
            toggle={toggleSwitch2}
            setSettings={setSettings}
            userPref={userSettings}
          />
        ) : (
          <ChangeSettings toggle={toggleSwitch2} />
        )}
      </Nav>
      <HeaderDiv>
        <h1>Weekly Hours</h1>
      </HeaderDiv>
      <DailyHourChart hourLogs={hourLog} />
    </div>
  );
};

export default App;

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
  const [hourLog, upDateHourLog] = useState({
    monday: [""]
  });
  const [userSettings, setUserSettings] = useState({
    userName: "trey ONe",
    startTime: "07:00",
    endTime: "16:00",
    lunchTime: "0.5"
  });

  function updateSettings(profile) {
    console.log(profile);
    setUserSettings(profile);
    switchSettingModal(!settingModal);
  }

  function toggleSwitch() {
    switchInputModal(!inputModal);
  }
  function toggleSwitch2() {
    // not good, need better
    switchSettingModal(!settingModal);
  }
  useEffect(() => {
    console.log(userSettings);
  }, [userSettings]);

  return (
    <div className="week">
      <h1>{userSettings.userName}</h1>
      <HeaderDiv>
        <h1>Weekly Hours</h1>

        {inputModal ? (
          <AddHour toggle={toggleSwitch} />
        ) : (
          <AddNewHours toggle={toggleSwitch} />
        )}
        {settingModal ? (
          <ChangeSettings toggle={toggleSwitch2} />
        ) : (
          <SettingUser
            toggle={toggleSwitch2}
            updateSettings={updateSettings}
            userPref={userSettings}
          />
        )}
      </HeaderDiv>
      <DailyHourChart />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import AddHour from "./componets/AddHour";
import ToggleButton from "./componets/ToggleButton";
import DailyHourChart from "./componets/DailyHourChart";
import SettingUser from "./componets/SettingUser";
import Header from "./componets/Header";
import styled from "@emotion/styled";
import "./style/WkDay.css";

const AddNewHours = props => {
  return <ToggleButton toggle={props.toggle}>Add Hours</ToggleButton>;
};
const ChangeSettings = props => {
  return <ToggleButton toggle={props.toggle}>Change Settings</ToggleButton>;
};
const SideNav = styled.nav`
  display: flex;
  flex-flow: column;
  align-content: center;
  background-color: white;
  padding: 25px;
  grid-column: 1;
  grid-row: 2/4;
`;

const SideBar = ({ userSettings }) => {
  const [inputModal, switchInputModal] = useState(false);
  const [settingModal, switchSettingModal] = useState(false);

  function toggleSwitch2() {
    // not good, need better
    console.log(userSettings);
    switchSettingModal(!settingModal);
  }
  function setSettings(e) {
    switchSettingModal({
      ...userSettings,
      [e.target.name]: e.target.value
    });
  }

  return (
    <SideNav>
      <UpdateHr />
      {settingModal ? (
        <SettingUser
          toggle={toggleSwitch2}
          setSettings={setSettings}
          userPref={userSettings}
        />
      ) : (
        <ChangeSettings toggle={toggleSwitch2} />
      )}
    </SideNav>
  );
};

function UpdateHr() {
  const [inputModal, switchInputModal] = useState(false);
  function toggleSwitch() {
    console.log("fire");
    switchInputModal(!inputModal);
  }

  return (
    <div>
      {inputModal ? (
        <>
          <AddHour toggle={toggleSwitch} />
          <AddNewHours toggle={toggleSwitch} />
        </>
      ) : (
        <AddNewHours toggle={toggleSwitch} />
      )}
    </div>
  );
}

const App = () => {
  const [hourLog, upDateHourLog] = useState([]);
  const [userSettings, setUserSettings] = useState({
    username: "",
    startTime: "",
    endTime: "",
    lunchTime: "0.5"
  });

  return (
    <div className="week">
      <Header />

      <DailyHourChart hourLogs={hourLog} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";

import ModalSettingUser from "./componets/ModalSettingUser";
import Header from "./componets/Header";
import SideBar from "./componets/Nav";
import CardWeeklyOverview from "./componets/CardWeeklyOverview";
import CardDailyHourChart from "./componets/CardDailyHourChart";

import styled from "@emotion/styled";
import "./style/WkDay.css";
const OverTable = styled.div`
  height: 75%;
  grid-column: 2;
  grid-row: 2;
  display: flex;
  padding: 5px;
`;
// user Pref should be context,
const App = () => {
  const [hourLog, upDateHourLog] = useState([]);
  const [userBaseValue, updateUserBaseValue] = useState({
    username: "",
    startTime: "",
    endTime: "",
    lunchTime: "0.5"
  });

  const [isModalView, updateModalView] = useState({
    dataTable: false,
    settings: false,
    addHours: false
  });

  function updateUserSettings(e) {
    const settingsName = e.target.name;
    const settingsValue = e.target.value;
    updateUserBaseValue({ ...userBaseValue, [settingsName]: settingsValue });
  }

  function visualModalToggle(e) {
    /*
for (let modalType in isModalView) {
      isModalView[modalType] = false;
    }
*/
    const modalName = e.target.name;
    const modalCurrentBool = isModalView[modalName];
    updateModalView({ ...isModalView, [modalName]: !modalCurrentBool });
  }

  return (
    <div className="week">
      <Header />
      <SideBar visualModal={visualModalToggle} statusModal={isModalView} />
      <span className="info">
        <ModalSettingUser
          modalView={isModalView.settings}
          userPref={userBaseValue}
          setSettings={updateUserSettings}
          visualModal={visualModalToggle}
        />
      </span>
      <OverTable>
        <CardWeeklyOverview />
        <CardDailyHourChart />
      </OverTable>
    </div>
  );
};

export default App;

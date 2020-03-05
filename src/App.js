import React, { useState, useEffect } from "react";

import ModalAddHour from "./components/ModalAddHour";
import ModalSettingUser from "./components/ModalSettingUser";
import Header from "./components/Header";
import SideBar from "./components/Nav";
import CardWeeklyOverview from "./components/CardWeeklyOverview";
import CardDailyHourChart from "./components/CardDailyHourChart";
import TableSimpleHr from "./components/TableSimpleHr";

import styled from "@emotion/styled";
import "./style/WkDay.css";
const OverTable = styled.div`
  height: 75%;
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-flow: column;
  padding: 5px;
`;

const blurOut = {
  filter: `blur(5px) grayscale(50%)`
};

// user Pref should be context,
const App = () => {
  const [hourLog, upDateHourLog] = useState([]);
  const [userBaseValue, updateUserBaseValue] = useState({
    username: "testiner",
    startTime: "08:00",
    endTime: "16:30",
    lunchTime: "0.5"
  });

  const [isModalView, updateModalView] = useState({
    dataTable: false,
    settings: false,
    addHours: false,
    modalTable: false // blur out the any of the modals,
  });

  function updateUserSettings(e) {
    const settingsName = e.target.name;
    const settingsValue = e.target.value;
    updateUserBaseValue({ ...userBaseValue, [settingsName]: settingsValue });
  }

  function visualModalToggle(e) {
    const modalName = e.target.name;
    const modalCurrentBool = isModalView[modalName];
    updateModalView({ ...isModalView, [modalName]: !modalCurrentBool });

    console.log(isModalView);
  }

  return (
    <div className="week" style={isModalView.modalTable ? blurOut : null}>
      <Header />
      <SideBar visualModal={visualModalToggle} />

      <span className="info">
        <ModalSettingUser
          modalView={isModalView.settings}
          visualModal={visualModalToggle}
          userPref={userBaseValue}
          setSettings={updateUserSettings}
        />
        <ModalAddHour
          modalView={isModalView.addHours}
          visualModal={visualModalToggle}
        />
      </span>

      <OverTable>
        <TableSimpleHr modalDisp={isModalView.modalTable} />
        <CardWeeklyOverview />
      </OverTable>
    </div>
  );
};

export default App;

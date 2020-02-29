import React, { useState, useEffect } from "react";

import UserSettings from "./componets/SettingUser";
import Header from "./componets/Header";
import SideBar from "./componets/Nav";
import "./style/WkDay.css";

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
      <div className="info">
        <UserSettings
          modalView={isModalView.settings}
          userPref={userBaseValue}
          setSettings={updateUserSettings}
        />
      </div>
    </div>
  );
};

export default App;

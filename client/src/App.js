import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";

import { WeeklyHourProvider, useWeeklyHour } from "./context/weeklyHourContext";
import FlexTimeScale from "./components/FlexTimeScale";
import WeeklyStatusContainer from "./components/WeeklyStatusContainer";

const Main = () => {
  return (
    <main>
      <FlexTimeScale />
      <WeeklyStatusContainer />
    </main>
  );
};
const Header = () => {
  const [currentHrsWorked, UpdateCurrentHrsWorked] = useState();
  const { weeklyStatus, setWeeklyStatus } = useWeeklyHour();
  // const [currentHrsWorked, UpdateCurrentHrsWorked] = useTotalHrsWorked();

  useEffect(() => {
    // change to a custom hook, allready have a base setup
    const dailyHrs = weeklyStatus.map((day) => day.hrs && day.isActive);

    const sumHours = dailyHrs.reduce((result, item) => {
      return result + item;
    }, 0);

    UpdateCurrentHrsWorked(sumHours);
  }, [weeklyStatus, currentHrsWorked]);

  return (
    <header style={{ display: "flex", justifyContent: "space-evenly" }}>
      <h1>Weekly Hour Log</h1>
      <h1>TOTAL Hours : {currentHrsWorked}</h1>
    </header>
  );
};

function App() {
  return (
    <WeeklyHourProvider>
      <Header />
      <Main />
    </WeeklyHourProvider>
  );
}

export default App;

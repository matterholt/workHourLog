import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";

import { WeeklyHourProvider, useWeeklyHour } from "./context/weeklyHourContext";

import FlexTimeScale from "./components/FlexTimeScale";
import WeeklyLogsContainer from "./components/WeeklyLogsContainer";
import Header from "./components/Header";
import SetDefaults from "./components/SetDefaults";

const ActionBar = css`
  display: flex;
`;
const Main = () => {
  const [isShown, switchIsShown] = useState(false);
  return (
    <main>
      <div css={ActionBar}>
        <button onClick={() => switchIsShown(!isShown)}>
          {isShown ? "Hide" : "Hour Scale"}
        </button>

        {isShown ? <FlexTimeScale /> : null}
        <SetDefaults />
      </div>

      <WeeklyLogsContainer />
    </main>
  );
};

const totalHour_container = css`
  position: fixed;
  top: 0;
  left: 0;
  margin: 10px;
`;

const TotalHours = () => {
  const [currentHrsWorked, UpdateCurrentHrsWorked] = useState();
  const { weeklyStatus, setWeeklyStatus } = useWeeklyHour();
  // const [currentHrsWorked, UpdateCurrentHrsWorked] = useTotalHrsWorked();

  useEffect(() => {
    console.log(weeklyStatus);
    // change to a custom hook, all ready have a base setup
    // const justHrs = weeklyStatus.map((day) => Number(day.dailyHours));
    // const sumHours = justHrs.reduce((result, item) => {
    //   return result + item;
    // }, 0);
    // UpdateCurrentHrsWorked(sumHours);
  }, [weeklyStatus, currentHrsWorked]);

  return (
    <div css={totalHour_container}>
      <h1 style={{ textAlign: "center" }}>
        Wkly Hrs
        <br /> {currentHrsWorked}
      </h1>
    </div>
  );
};

function App() {
  return (
    <WeeklyHourProvider>
      <TotalHours />
      <Header />
      <Main />
    </WeeklyHourProvider>
  );
}

export default App;

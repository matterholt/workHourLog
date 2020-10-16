import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";

import { WeeklyHourProvider, useWeeklyHour } from "./context/weeklyHourContext";

import FlexTimeScale from "./components/FlexTimeScale";
import WeeklyStatusContainer from "./components/WeeklyStatusContainer";
import Header from "./components/Header";

const Main = () => {
  const [isShown, switchIsShown] = useState(false);
  return (
    <main>
      {isShown ? <FlexTimeScale /> : null}
      <WeeklyStatusContainer />
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
    // change to a custom hook, all ready have a base setup
    const dailyHrs = weeklyStatus.map((day) => day.hrs && day.isActive);

    const sumHours = dailyHrs.reduce((result, item) => {
      return result + item;
    }, 0);

    UpdateCurrentHrsWorked(sumHours);
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

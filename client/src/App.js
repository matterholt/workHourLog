import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";


import FlexTimeScale from "./components/FlexTimeScale";
import WeeklyLogsContainer from "./components/WeeklyLogsContainer";
import Header from "./components/Header";
import SetDefaults from "./components/SetDefaults";
import WeeklyTotalHrs from "./components/WeeklyTotalHrs";

const ExtaFeatureAction = () => (
  <div>
  <button>Reset week</button>
  <button>Save Reset</button>
</div>)


const ActionBar = css`
  display: flex;
`;


const ActionMenu = ({ weeklyTimeLog }) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <div css={ActionBar}>
      {isReady ? (
        <div>
          <FlexTimeScale modalName="Flex Scale" />
        </div>
      ) : null}
      <SetDefaults modalName="Hour Default" />
      <WeeklyTotalHrs weeklyTimeLog={weeklyTimeLog} />
    </div>
  );
};
    


const Main = () => {
  const [weeklyTimeLog, setWeeklyTimeLog] = useState([
    { id: 1, dailyHours: 8 },
    { id: 2, dailyHours: 8 },
    { id: 3, dailyHours: 8 },
    { id: 4, dailyHours: 8 },
    { id: 5, dailyHours: 8 },
  ]);
  const [total,settotal] = useState()

  useEffect(() => {
    console.log(weeklyTimeLog);
    console.log(total);
  }, [weeklyTimeLog, total]);

  useEffect(() => {
      const reducer = (accumulator, currentValue) =>
        accumulator + currentValue.dailyHours;
      const hoursForWeek = weeklyTimeLog.reduce(reducer, 0);
    settotal(hoursForWeek);
  },[weeklyTimeLog])

  function updateWeeklyHours({ id, hourWorked }) {
    const modWeeklyTime = weeklyTimeLog.filter((x) => x.id !== id);
    const dailyHours = Number(hourWorked);
    setWeeklyTimeLog([...modWeeklyTime, { id, dailyHours }]);
    console.log(weeklyTimeLog);
  }

  return (
    <main>
      <ActionMenu weeklyTimeLog={weeklyTimeLog} />
      <WeeklyLogsContainer updateWeeklyHours={updateWeeklyHours} />
    </main>
  );
};





function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;

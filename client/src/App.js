import React, { useState}from "react";
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
          <SetDefaults modalName="Hour Default" />
        </div>
      ) : null}
      <WeeklyTotalHrs weeklyTimeLog={weeklyTimeLog} />
    </div>
  );
};
    


const Main = () => {
  const [weeklyTimeLog, setWeeklyTimeLog] = useState([
    { id: 1, hours: 8 },
    { id: 2, hours: 8 },
    { id: 3, hours: 8 },
    { id: 4, hours: 8 },
    { id: 5, hours: 8 },
  ]);

  function updateWeeklyHours(dayLog) {
    console.log(dayLog);
    
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

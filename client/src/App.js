/** @jsxImportSource @emotion/core */
import { jsx, css } from '@emotion/core'

import { useState, useEffect } from 'react'

import "./App.css";

import Header from "./components/General/Header";


import SetDefaults from "./components/DefautHr/SetDefaults";
import FlexTimeScale from "./components/FlexScales/FlexTimeScale";

import WeeklyLogsContainer from "./components/DailyLogs/WeeklyLogsContainer";
import WeeklyTotalHrs from "./components/TotalHours/WeeklyTotalHrs";

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
  return (
    <main>
      < WeeklyLogsContainer/>
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

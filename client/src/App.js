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


const ActionMenu = () => {
  const [isReady, setIsReady] = useState(false)
    
    return (
      <div css={ActionBar}>
        {isReady ? (
          <div>
            <FlexTimeScale modalName="Flex Scale" />
            <SetDefaults modalName="Hour Default" />
          </div>
        ) : null}
        <WeeklyTotalHrs />
      </div>
    );}
const Main = () => {
  return (
    <main>
<ActionMenu/>
      <WeeklyLogsContainer />
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

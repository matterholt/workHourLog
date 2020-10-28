import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import "./App.css";

// import { WeeklyHourProvider } from "./context/weeklyHourContext";

import FlexTimeScale from "./components/FlexTimeScale";
import WeeklyLogsContainer from "./components/WeeklyLogsContainer";
import Header from "./components/Header";
import SetDefaults from "./components/SetDefaults";

const ActionBar = css`
  display: flex;
`;
const Main = () => {
  return (
      <main>
        <div css={ActionBar}>
          <FlexTimeScale modalName="Flex Scale" />
          <SetDefaults modalName="Hour Default" />
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


  return (
    <div css={totalHour_container}>
      <h1 style={{ textAlign: "center" }}>
        Wkly Hrs
        <br /> {0}
      </h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <TotalHours />
      <Header />
      <Main />
    </div>
  );
}

export default App;

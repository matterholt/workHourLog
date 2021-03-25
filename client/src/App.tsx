/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import React, { useState } from 'react';
import "./App.css";

import Header from "./components/Header/Header"
import WeeklyTimeLogTable from "./components/DailyValueLogs/WeeklyTimeLogTable"


function App() {
    const [hoursWorkedWeek, setHoursWorkedWeek] = useState<number>(0);
  return (
    <div css={css`
    display:flex;
    flex-flow:column;
    align-items:center;
    `
    }>
      <Header hoursWorkedWeek={hoursWorkedWeek }/>
      <WeeklyTimeLogTable setHoursWorkedWeek={setHoursWorkedWeek}/>
    </div>
  );
}

export default App;

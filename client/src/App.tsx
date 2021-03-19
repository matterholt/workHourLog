
import React, { useState } from 'react';
import "./App.css";

import Header from "./components/Header/Header"
import WeeklyTimeLogTable from "./components/DailyValueLogs/WeeklyTimeLogTable"

// const Layout = styled.div`
// display:flex;
// flex-flow:column;
// `

function App() {
    const [hoursWorkedWeek, setHoursWorkedWeek] = useState<number>(0);
  return (
    <div>
      <Header hoursWorkedWeek={hoursWorkedWeek }/>
      <WeeklyTimeLogTable />
    </div>
  );
}

export default App;

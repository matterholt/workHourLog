/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useCallback, useEffect, useState } from 'react';


import "./App.css";
import Header from "./components/General/Header";
import WeeklyLogsContainer from "./components/DailyLogs/WeeklyLogsContainer";
import TableRowData from "./components/DailyValueLogs/TableRowData"


const table = css`
  background-color: #434a52;
  min-width:550px;
`;
const tableHead = css`
  background-color: #6b7077;
  min-width: 150px;
`;


const activeDays = [
  {
    id: 100,
    day: "monday",
    totalHours: 0,
  },
  {
    id: 200,
    day: "tuesday",
    totalHours: 0,
  },
  {
    id: 300,
    day: "wednesday",
    totalHours: 0,
  },
  {
    id: 400,
    day: "thursday",
    totalHours: 0,
  },
  {
    id: 500,
    day: "friday",
    totalHours: 0,
  },
];


const TableHeader = () => (
  <tr>
    <th css={tableHead}>Day</th>
    <th css={tableHead}>Punch In</th>
    <th css={tableHead}>Punch Out</th>
    <th css={tableHead}>Hours Worked</th>
  </tr>
);


const reducer = (acc, current) => acc + current;

const Main = () => {
  const [weeklyHours, setWeeklyHours] = useState(() => {
    
  return activeDays.map((dayValue) => {
    return {
      dayId: dayValue.id,
      dailyTotal: Number(dayValue.totalHours),
    };
  });
  })

  const [totalWorkedHours, setTotalWorkedHours] = useState(() => {
      const totalWeekHours = weeklyHours
        .map((dayValue) => dayValue.dailyTotal)
        .reduce(reducer);
    return Number(totalWeekHours);
  })

  function updateWeeklyHours(newValue) {
    const notChangeHours = weeklyHours.filter((day) => day.id !== newValue.id);
    setWeeklyHours([...notChangeHours, newValue]);
  }

  return (
    <main>
      <h2>Weekly Hours : {totalWorkedHours}</h2>
      <table css={table}>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {activeDays.map((dailyValue) => (
            <TableRowData
              key={dailyValue.id}
              dayId={dailyValue.id}
              dayOfWeek={dailyValue.day}
              updateWeeklyValues={updateWeeklyHours}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;

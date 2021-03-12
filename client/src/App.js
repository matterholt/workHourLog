/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useEffect, useState } from 'react';


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



const TableHeader = () => (
  <tr>
    <th css={tableHead}>Day</th>
    <th css={tableHead}>Punch In</th>
    <th css={tableHead}>Punch Out</th>
    <th css={tableHead}>Hours Worked</th>
  </tr>
);



const Main = () => {

  const [weeklyValues, setWeeklyValues] = useState([
    {
      id: 100,
      day: "monday",
      punchIn: null,
      punchOut: null,
      totalHours: 10,
    },
    {
      id: 200,
      day: "tuesday",
      punchIn: null,
      punchOut: null,
      totalHours: 10,
    },
  ]);
  
  function updateWeeklyValues(newValues) {

    // need to find the day that has been updated
    // update that day's value 
    // spread it back into the weekly values

    setWeeklyValues(newValues);
  }

  const reducer = (acc,current) => acc + current
  const totalWeekHours = weeklyValues
    .map((dayValue) => dayValue.totalHours)
    .reduce(reducer);

  return (
    <main>
      <h2>Weekly Hours : {totalWeekHours}</h2>
      <table css={table}>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {weeklyValues.map((dailyValue) => (
            <TableRowData
              key={dailyValue.id}
              dailyValue={dailyValue}
              updateWeeklyValues={updateWeeklyValues}
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
      <Header />
      <Main />
    </div>
  );
}

export default App;

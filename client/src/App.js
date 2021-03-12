/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useEffect, useState } from 'react';
import {calculateDailyHours} from './helpers/calculateDailyHours'

import "./App.css";
import Header from "./components/General/Header";
import WeeklyLogsContainer from "./components/DailyLogs/WeeklyLogsContainer";



const table = css`
  background-color: #434a52;
  min-width:550px;
`;
const tableHead = css`
  background-color: #6b7077;
  min-width: 150px;
`;
const tabledata = css`
  background-color: #dbdbdb;
  color: gray;
  text-align:center;
`;


const TableHeader = () => (
  <tr>
    <th css={tableHead}>Day</th>
    <th css={tableHead}>Punch In</th>
    <th css={tableHead}>Punch Out</th>
    <th css={tableHead}>Hours Worked</th>
  </tr>
);


const defaultTime = {
  punchIn: "08:00",
  punchOut: "16:30",
};

const TableRowData = ({ dailyValues, updateWeeklyValues }) => {

  const [timePunchIn, setTimePunchIn] = useState(
    () => dailyValues.punchIn || defaultTime.punchIn
  );
    const [timePunchOut, setTimePunchOut] = useState(
      () => dailyValues.punchIn || defaultTime.punchOut
    );
  const [dailyTotal, setDailyTotal] = useState(
    () => dailyValues.totalHours || calculateDailyHours(timePunchIn, timePunchOut)
  );

  //calculate the hours worked
  const updateHours = () => {
    const totalHours = calculateDailyHours(timePunchIn, timePunchOut);
    setDailyTotal(totalHours);
    updateWeeklyValues({ ...dailyValues, totalHours: totalHours });

  };

  function updateTime(e) {
    const { name, value } = e.target;
    if(name=== "punchIn"){
      setTimePunchIn(value);
    }
    if (name === "punchOut") {
    setTimePunchOut(value)
    }
    updateWeeklyValues({ ...dailyValues, [name]: value });
    updateHours();
  }

  return (
    <tr>
      <td css={tabledata}>{dailyValues.day}</td>
      <td css={tabledata}>
        <input
          type="time"
          value={timePunchIn}
          name="punchIn"
          onChange={(e) => updateTime(e)}
        />
      </td>
      <td css={tabledata}>
        <input
          type="time"
          name="punchOut"
          value={timePunchOut}
          onChange={(e) => updateTime(e)}
        />
      </td>
      <td css={tabledata}>{dailyTotal}</td>
    </tr>
  );
};


const Main = () => {

    const [dailyValues, setDailyValue] = useState({
      day: "monday",
      punchIn: null,
      punchOut: null,
      totalHours: 0
    });
  
  function updateWeeklyValues(newValues) {
    setDailyValue(newValues );
  }
  
  
  return (
    <main>
      <h2>Weekly Hours : {dailyValues.totalHours}</h2>
      <table css={table}>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          <TableRowData
            dailyValues={dailyValues}
            updateWeeklyValues={updateWeeklyValues}
          />
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

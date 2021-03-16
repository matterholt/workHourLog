/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useCallback, useEffect, useState } from 'react';
import { calculateDailyHours } from "./helpers/calculateDailyHours";


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

// remove add some where else
const activeDays = [
  {
    id: 100,
    day: "monday",
    timeLog: {clockIn:"08:00",clockOut:"16:30"},
    active:true
  },
  {
    id: 200,
    day: "tuesday",
    timeLog: {clockIn:"08:00",clockOut:"16:30"},
    active:true
  },
  {
    id: 300,
    day: "wednesday",
    timeLog: {clockIn:"08:00",clockOut:"16:30"},
    active:true
  },
  {
    id: 400,
    day: "thursday",
    timeLog: {clockIn:"08:00",clockOut:"16:30"},
    active:true
  },
  {
    id: 500,
    day: "friday",
    timeLog: {clockIn:"08:00",clockOut:"16:30"},
    active:true
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


function HoursForTheWeek({ hoursWorkedWeek }) {

  return <h2>Weekly Hours : {hoursWorkedWeek}</h2>;
}

 ///////////////// helper function for calculating hours /////////////////
const totalHourReducer = (acc, current) => acc + current;
const hourForWeek = (hourList) => {
  return hourList.map((x) => {
    const { clockIn, clockOut } = x.timeLog;
    const hours = calculateDailyHours(clockIn, clockOut);
    return { id: x.id, hours };
  });
}
  function updateList(copyData, id, newInput) {
    // get the id of the change item
    const data = copyData;
    const dayId = data.map((x) => x.id).indexOf(id);
    // remove item index and replace with new
    data.splice(dayId, 1, newInput);
    // send back new list with new input
    return data;
  }
  /////////////////////helpers above //////////////////


const Main = () => {
  const [dailyTimeLog, setDailyTimeLog] = useState(() => activeDays);
  const [hoursWorkedDaily, setHoursWorkedDaily] = useState([])
  const [hoursWorkedWeek, setHoursWorkedWeek] = useState(0);


  function updateWeeklyHours(updateLogs) {
    // updates the punch in and punch out times
    const theDayLog = dailyTimeLog.find((day) => day.id === updateLogs.dayId);
    const updateTime = { ...theDayLog.timeLog, ...updateLogs.timeLog };
    const newTimeLogDay ={ ...theDayLog, timeLog: updateTime }
    const newData = updateList(dailyTimeLog, updateLogs.dayId, newTimeLogDay);
    setDailyTimeLog([...newData]);
    updateDailyHoursWorked(dailyTimeLog);
  }


  function updateDailyHoursWorked(dailyTimeLog = []) {
    // update the hours for each day
    const hoursWorked = hourForWeek(dailyTimeLog);

    setHoursWorkedDaily([ ...hoursWorked]);
    updateWeeklyHoursWorked(hoursWorked);
  }

  function updateWeeklyHoursWorked(hourLogs = []) {
      // updates the total hours for the week
      const hoursWorked = hourLogs.map((x) => x.hours);
      setHoursWorkedWeek(hoursWorked.reduce(totalHourReducer));
    }

  return (
    <main>
      <HoursForTheWeek hoursWorkedWeek={hoursWorkedWeek} />

      <table css={table}>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {dailyTimeLog.map((dailyValue) => (
            <>
              <TableRowData
                key={dailyValue.id}
                dayId={dailyValue.id}
                dayOfWeek={dailyValue.day}
                timeLog={dailyValue.timeLog}
                updateTimeLog={updateWeeklyHours}
              />
            </>
          ))}
        </tbody>
      </table>
      <ul>
        {hoursWorkedDaily.map((x) => (
          <li>
            <p>Day ID:{x.id}</p>
            <p>Hours:{x.hours}</p>
          </li>
        ))}
      </ul>
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

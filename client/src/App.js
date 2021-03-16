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


const reducer = (acc, current) => acc + current;

const Main = () => {
  const [dailyTimeLog, setDailyTimeLog] = useState(() => activeDays);
  const [hoursWorkedDaily, setHoursWorkedDaily] = useState([])

  // possibility to move to another component
  const [hoursWorkedWeek, setHoursWorkedWeek] = useState(0);



  function updateWeeklyHours(updateLogs) {
    const copyData = dailyTimeLog;
    const theDayLog = copyData.find((day) => day.id === updateLogs.dayId);
    const updateTime = { ...theDayLog.timeLog, ...updateLogs.timeLog };
    const newTimeLogDay ={ ...theDayLog, timeLog: updateTime }
    const dayId = copyData.map(x => x.id).indexOf(updateLogs.dayId);
    copyData.splice(dayId, 1, newTimeLogDay);
    setDailyTimeLog([...copyData]);
    updateDailyHoursWorked();
  }

  function updateDailyHoursWorked() {
    // remove the day that gets updated.
    
    const hoursWorked = dailyTimeLog.map((x) => {
          const { clockIn, clockOut } = x.timeLog;
          const hours = calculateDailyHours(clockIn, clockOut);
          return { id:x.id, hours };
    });
    setHoursWorkedDaily([...hoursWorkedDaily, ...hoursWorked]);
    updateWeeklyHoursWorked(hoursWorked);
  }

    function updateWeeklyHoursWorked(hourLogs=[]) {
      const hoursWorked = hourLogs.map((x) => x.hours);
      setHoursWorkedWeek(hoursWorked.reduce(reducer));
    }



    useEffect(() => console.log(hoursWorkedDaily));


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

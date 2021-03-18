/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useCallback, useEffect, useState } from 'react';
import { calculateDailyHours } from "./helpers/calculateDailyHours";
import {activeDays} from "./helpers/weeklyLogs"

import "./App.css";
import Header from "./components/General/Header";
import WeeklyLogsContainer from "./components/DailyLogs/WeeklyLogsContainer";
import TableRowData from "./components/DailyValueLogs/TableRowData"
import HoursForTheWeek from './components/DailyValueLogs/HoursWeek'
import TableHeader from "./components/DailyValueLogs/TableHeader"

const table = css`
  background-color: #434a52;
  min-width:550px;
`;


// remove add some where else

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
  const [hoursWorkedDaily, setHoursWorkedDaily] = useState(() =>
    hourForWeek(activeDays)
  );
  const [hoursWorkedWeek, setHoursWorkedWeek] = useState(0);


  function updateWeeklyHours(updateLogs) {

    // get the day that was update
    const theDayLog = dailyTimeLog.find((day) => day.id === updateLogs.dayId);

    // spread the updated time with the previous state
    const updateTime = { ...theDayLog.timeLog, ...updateLogs.timeLog };

    // update the complete log
    const newTimeLogDay = { ...theDayLog, timeLog: updateTime };
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
          {dailyTimeLog.map((dailyValue) => {
            const dailyHours = hoursWorkedDaily.find(x=> x.id === dailyValue.id)
          return (
            <>
              <TableRowData
                key={dailyValue.id}
                dayId={dailyValue.id}
                dayOfWeek={dailyValue.day}
                timeLog={dailyValue.timeLog}
                updateTimeLog={updateWeeklyHours}
                dailyHours={dailyHours.hours }
              />
            </>
          );}
          
          )
          }
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

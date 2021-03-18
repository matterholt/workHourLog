/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useState } from 'react';
import { activeDays } from "./helpers/weeklyLogs"
import { totalHourReducer, hourForWeek, updateTimeLog } from "./helpers/updateHourLog"

import "./App.css";
import TableRowData from "./components/DailyValueLogs/TableRowData"
import HoursForTheWeek from './components/DailyValueLogs/HoursWeek'
import TableHeader from "./components/DailyValueLogs/TableHeader"

const table = css`
  background-color: #434a52;
  min-width:550px;
`;


const Main = () => {
  const [dailyTimeLog, setDailyTimeLog] = useState(() => activeDays);
  const [hoursWorkedDaily, setHoursWorkedDaily] = useState(() =>
    hourForWeek(activeDays)
  );
  const [hoursWorkedWeek, setHoursWorkedWeek] = useState(0);


  function updateWeeklyHours(updateLogs) {
    
    const newData = (updateTimeLog(dailyTimeLog, updateLogs));

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

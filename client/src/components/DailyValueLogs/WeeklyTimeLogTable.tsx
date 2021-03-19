


import React, { useState } from 'react';
import { activeDays } from "../../helpers/weeklyLogs"
import { totalHourReducer, hourForWeek, updateTimeLog } from "../../helpers/updateHourLog"

import TableRowData from "./TableRowData"
import TableHeader from "./TableHeader"

// const Table = styled.table`
//   background-color: #434a52;
//   min-width:550px;
// `;

interface DailyLogs {
    id: number;
    day: string;
    timeLog: {
      clockIn: string;
      clockOut: string;
    };
    active: boolean;
}

interface WeekHours {
  id: number;  
  hours: number;
}

const WeeklyTimeLogTable = () => {
  
  const [dailyTimeLog, setDailyTimeLog] = useState<DailyLogs[]>(activeDays);
  const [hoursWorkedDaily, setHoursWorkedDaily] = useState<WeekHours[]>(() =>
    hourForWeek(activeDays)
  );
  const [hoursWorkedWeek, setHoursWorkedWeek] = useState<number>(0);

  function updateWeeklyHours(updateLogs: { dayId: number, timeLog: {} }) {
    const newData = updateTimeLog(dailyTimeLog, updateLogs);
    setDailyTimeLog([...newData]);
    updateDailyHoursWorked( dailyTimeLog );
  }

  function updateDailyHoursWorked(dailyTimeLog:object ) {
    // update the hours for each day
    const hoursWorked = hourForWeek(dailyTimeLog);
    setHoursWorkedDaily([ ...hoursWorked]);
    updateWeeklyHoursWorked(hoursWorked);
  }

  function updateWeeklyHoursWorked(hourLogs:WeekHours[]) {
      // updates the total hours for the week
    console.log(hourLogs)
      const hoursWorked = hourLogs.map((x:WeekHours) => x.hours);
      setHoursWorkedWeek(hoursWorked.reduce(totalHourReducer));
    }

  return (
      <table>
          <TableHeader />
      
        <tbody>
          {dailyTimeLog.map((dailyValue:DailyLogs) => {
            const dailyHours = hoursWorkedDaily.find((x:WeekHours) => x.id === dailyValue.id)
          return (
              <TableRowData
                key={dailyValue.id}
                dayId={dailyValue.id}
                dayOfWeek={dailyValue.day}
                timeLog={dailyValue.timeLog}
                updateWeeklyHours={updateWeeklyHours}
                dailyHours={dailyHours?.hours ?? 0}
              />
          );}
          )
          }
        </tbody>
      </table>
  );
};


export default WeeklyTimeLogTable;
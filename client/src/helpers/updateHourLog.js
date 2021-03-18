import {calculateDailyHours } from "./calculateDailyHours"

function totalHourReducer(acc, current) {
  return acc + current;
}
function hourForWeek(hourList) {
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
function updateTimeLog(dailyTimeLog, updateLogs) {
  // get the day that was update
  const theDayLog = dailyTimeLog.find((day) => day.id === updateLogs.dayId);

  // spread the updated time with the previous state
  const updateTime = { ...theDayLog.timeLog, ...updateLogs.timeLog };

  // update the complete log
  const newTimeLogDay = { ...theDayLog, timeLog: updateTime };
  const newData = updateList(dailyTimeLog, updateLogs.dayId, newTimeLogDay);
  return newData;
}


export { totalHourReducer, hourForWeek, updateTimeLog };
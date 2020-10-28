function timeConvertToMinutes(time) {
  const [hr, min] = time.split(":");
  const hrToMin = Number(hr) * 60;
  const totalMin = hrToMin + Number(min);
  return totalMin;
}

function calHourPass(inTime, outTime, lunchTime = 0.5) {
  let totalTime = outTime - inTime;
  let todayHour = totalTime / 60 - lunchTime;
  // console.log(`Today's hour are ${todayHour.toFixed(1)}`);
  return todayHour.toFixed(1);
}

function calculateDailyHours(dailyClockIn, dailyClockOut) {
  const arriveTimeMins = timeConvertToMinutes(dailyClockIn);
  const leaveTimeMins = timeConvertToMinutes(dailyClockOut);

  return calHourPass(arriveTimeMins, leaveTimeMins);
}

export { calculateDailyHours };

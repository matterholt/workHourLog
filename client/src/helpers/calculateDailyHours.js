function convertToMinutes(time) {
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

function calculateDailyHours(timeIn, timeLeave) {
  const arriveTimeMins = convertToMinutes(timeIn);
  const leaveTimeMins = convertToMinutes(timeLeave);

  return calHourPass(arriveTimeMins, leaveTimeMins);
}

export { calculateDailyHours };

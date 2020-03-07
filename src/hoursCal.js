function getMin(time) {
  const [hr, min] = time.split(":");
  const hrToMin = Number(hr) * 60;
  const totalMin = hrToMin + Number(min);
  return totalMin;
}

function calHourPass(inTime, outTime) {
  let totalTime = outTime - inTime;
  let todayHour = totalTime / 60 - 0.5;
  console.log(`Today's hour are ${todayHour}`);
  return todayHour;
}

function calculateDailyHours(timeIn, timeLeave) {
  const arriveTimeMins = getMin(timeIn);
  const leaveTimeMins = getMin(timeLeave);

  return calHourPass(arriveTimeMins, leaveTimeMins);
}

export default calculateDailyHours;

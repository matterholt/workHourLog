function getMin(time) {
  const [hr, min] = time.split(":");
  const hrToMin = Number(hr) * 60;
  const totalMin = hrToMin + Number(min);
  return totalMin;
}

function calHourPass(inTime, outTime) {
  let totalTime = outTime - inTime;
  let todayHour = totalTime / 60;
  console.log(`Today's hour are ${todayHour}`);
  return todayHour;
}


function convertNumberHrsToTime(hrsWorked) {
  const [hrUnit, minUnit] = hrsWorked.split(".");  
  const fixedHour = hrUnit.length === 1 ? `0${hrUnit}` : `${hrUnit}`
  const fixedMins = minUnit === undefined ? "0" : minUnit;
  return [fixedHour, fixedMins];
}

export { convertNumberHrsToTime }
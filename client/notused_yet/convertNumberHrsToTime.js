
function convertNumberHrsToTime(userHrsWorked="0") {

  const [hrUnit, minUnit] = userHrsWorked.split(".");  
  const fixedHour = hrUnit.length === 1 ? `0${hrUnit}` : `${hrUnit}`
  const fixedMins = minUnit === undefined ? "0" : minUnit;
  return [fixedHour, fixedMins];
}

export { convertNumberHrsToTime }
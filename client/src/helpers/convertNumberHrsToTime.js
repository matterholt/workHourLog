
    // const [validateHrs, validateMin] = value.split(".");
    // console.log(validateHrs);
    // const fixedMins = validateMin === undefined ? "0" : validateMin;

function convertNumberHrsToTime(hrsWorked) {
  // should return a value that is is split into time
  // 8.1 convert to  08.1 but 10.1 convert to 10.1
  const [hrUnit, minUnit] = hrsWorked.split(".");
  
  const fixedMins = minUnit === undefined ? "0" : minUnit;
  const stringHr = hrUnit.length === 1 ? `0${hrUnit}` : `${hrUnit}`
  

  return `${stringHr}.${fixedMins}`;
}

export { convertNumberHrsToTime }
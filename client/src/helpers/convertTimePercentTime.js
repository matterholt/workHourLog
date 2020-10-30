import { flexScale } from "./standardDefaults/flexTimeScale";
/**
 * converts at logged time to a the flex scale percent value
 *
 * @param {sting} loggedTime
 */
function convertTimePercentTime(loggedTime) {

  // so if the minute is between 57-59 will have to
  // fallback on the previous Hr

  
    const [loggedHr, loggedMin] = loggedTime.split(":");
     const HourPercentValue = flexScale.find((timeSection) =>
    timeSection.mins.find((min) => min === loggedMin)
  );
    const flexPercentValue = HourPercentValue.percentHour;
  return Number(loggedHr) + flexPercentValue ;
} 

export { convertTimePercentTime };

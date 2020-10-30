import { flexScale } from "./flexTimeScale";
/**
 * converts at logged time to a the flex scale percent value
 *
 * @param {sting} loggedTime
 */
function convertTimePercentTime(loggedTime) {
    const [loggedHr, loggedMin] = loggedTime.split(":");
     const HourPercentValue = flexScale.find((timeSection) =>
    timeSection.mins.find((min) => min === loggedMin)
  );
    const flexPercentValue = HourPercentValue.percentHour;
  return Number(loggedHr) + flexPercentValue;
}

export { convertTimePercentTime };

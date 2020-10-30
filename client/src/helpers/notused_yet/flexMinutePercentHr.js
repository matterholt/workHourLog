import { flexScale } from "../standardDefaults/flexTimeScale";
/**
 * Takes a minute from the user input the would send back a 
 * the percent of hour that the min clock in time falls into 
 * 
 * for punching out value it should have the first minute. 
 * for punching in it doesn't matter , cause can control it
 * 
 * 
 * @param {sting} logMinute 
 */
function flexMinutePercentHr(logMinute) {
    // 
    const HourPercentValue = flexScale.find((timeSection) =>
      timeSection.mins.find((min) => min === logMinute)
    );
return HourPercentValue.percentHour;
}

export { flexMinutePercentHr };

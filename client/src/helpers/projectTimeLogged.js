
import { convertPercentHrToTime } from "../helpers/convertPercentHrToTime";
import { convertTimePercentTime } from "../helpers/convertTimePercentTime";
/**
 * returns projected time to leave for the day. 

 * @param {string} baseLoggedTime 
 * @param {string} hourWorked 
 */


function projectTimeLogged(baseLoggedTime, hourWorked, scheduleLunchHr = 0.5) {
  // convert punch in time to percent value
  const punchInPercentHr = convertTimePercentTime(baseLoggedTime);
  // estimate punch out time base on hours worked
  const projectedPunchOutPercentHr =
    punchInPercentHr + Number(hourWorked) + scheduleLunchHr;
  // the calculated value to convert to a punch out time
  const projectedPunchOutTime = convertPercentHrToTime(
    projectedPunchOutPercentHr
  );
    return projectedPunchOutTime;
}

export { projectTimeLogged };
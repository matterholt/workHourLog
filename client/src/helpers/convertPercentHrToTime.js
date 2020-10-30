import { flexScale } from "./flexTimeScale";



function convertPercentHrToTime  (useHrPercent) {
  const [hr, perHour] = useHrPercent.toFixed(1).split(".");

  // searching through the flex time more of a global function
  // have to take the perHour to get a decimal point, look into a different split

  const timeMinute = flexScale.find(
    (section) => section.percentHour === Number(perHour) / 10
  );
  const [firstPunchTime, ...rest] = timeMinute.mins;

    
    // there is a function i did to help with below
  const test = `0${hr}:${firstPunchTime}`;

  return test;
}

export { convertPercentHrToTime };
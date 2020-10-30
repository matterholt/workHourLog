import { flexScale } from "./standardDefaults/flexTimeScale";



function convertPercentHrToTime(useHrPercent) {

  const [hrUnit, perHour] = useHrPercent.toFixed(1).split(".");
  const timeMinute = flexScale.find(
    (section) => section.percentHour === Number(perHour) / 10
  );
  const [firstPunchTime, ...rest] = timeMinute.mins;
  const fixedHour = hrUnit.length === 1 ? `0${hrUnit}` : `${hrUnit}`;
  const loggedTime = `${fixedHour}:${firstPunchTime}`;

  return loggedTime;
}

export { convertPercentHrToTime };
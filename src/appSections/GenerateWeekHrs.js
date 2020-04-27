// auto generates teh week hour using default hours!
// will use a global context for hours of the week.
// all actions no
import React, { useContext } from "react";
import { WeekHourLogContext } from "../context/WeekHourLogContext";

export const GernateWeekHr = () => {
  // global context for working hours
  // generate for only 5 days.
  // const workWeek = ["Monday", "Tuesday", "Wednesday", " Thursday", "Friday"];
  const { weekHrLog, updateWeekHrLog } = useContext(WeekHourLogContext);

  function generateHrs() {
    const test = {
      day: "",
      start: "",
      quit: "",
    };
    console.log("generates 5 day work week!");
    console.log(weekHrLog);
  }

  return <button onClick={generateHrs}> 5 Day Gen</button>;
};

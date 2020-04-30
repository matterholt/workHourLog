// auto generates teh week hour using default hours!
// will use a global context for hours of the week.
// all actions no
import React, { useContext } from "react";
import { DefaultHrContext } from "../context/DefaultHrContext";
import { WeekHourLogContext } from "../context/WeekHourLogContext";
import calculateDailyHours from "../logic/hoursCal";

import { ActionButton } from "../components/style/ActionButton";

export const GenerateWeekHr = () => {
  // global context for working hours
  // generate for only 5 days.
  // const workWeek = ["Monday", "Tuesday", "Wednesday", " Thursday", "Friday"];
  const { workingHrs } = useContext(DefaultHrContext);
  const { updateWeekHrLog } = useContext(WeekHourLogContext);

  function generateHrs() {
    const workWeek = ["Monday", "Tuesday", "Wednesday", " Thursday", "Friday"];

    const dayHourLog = workWeek.map((day) => {
      const hrStart = workingHrs.start;
      const hrQuit = workingHrs.quit;
      const HoursWorked = calculateDailyHours(hrStart, hrQuit);
      return {
        day: day,
        start: hrStart,
        quit: hrQuit,
        hrsWork: HoursWorked,
      };
    });
    updateWeekHrLog(dayHourLog);
  }

  return <ActionButton onClick={generateHrs}> 5 Day Gen</ActionButton>;
};

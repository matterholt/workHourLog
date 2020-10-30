import React, { useState, useCallback } from "react";
import { weeklyStatusDefault } from "../helpers/weeklyStatusDefault";


function useUpdateWeeklyHrs() {
  // update the state here and with each change
  const [currentDay, setCurrentDay] = useState(weeklyStatusDefault);

  const updateStatus = useCallback(
    (updateItem) => {
      const dayId = updateItem.id;
      // console.log(updateItem);
      let notChangedHours = currentDay.filter((dayLog) => dayLog.id !== dayId);
      console.log(currentDay);
      setCurrentDay([...notChangedHours, updateItem]);
    },
    [currentDay]
  );

  return { currentDay, setCurrentDay };
}

export { useUpdateWeeklyHrs };

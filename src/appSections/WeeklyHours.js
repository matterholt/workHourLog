import React, { useEffect, useContext } from "react";

import { WeekHourLogContext } from "../context/WeekHourLogContext";
import { DailyHourWork } from "../components/DailyHourWork";

import styled from "@emotion/styled";

const UList = styled.ul`
  margin: 0;
  padding: 0;
  min-width: 100vw;
`;

export const WeeklyHours = () => {
  const { weekHrLog, updateWeekHrLog } = useContext(WeekHourLogContext);

  function handleHrUpdate(hours) {
    // how to change the object in an array?
    /**
     * need to replace the index or the day that need to change
     *
     * need t
     */

    updateWeekHrLog([...weekHrLog, hours]);
  }
  useEffect(() => {
    console.log(weekHrLog);
  });

  return (
    <UList>
      {weekHrLog.map((dayInput, dayKey) => {
        return (
          <DailyHourWork
            handelHrUpdate={handleHrUpdate}
            dailyHrs={dayInput}
            key={dayKey}
            dayKey={dayKey}
          />
        );
      })}
    </UList>
  );
};

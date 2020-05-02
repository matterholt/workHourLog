import React, { useContext } from "react";

import { WeekHourLogContext } from "../context/WeekHourLogContext";
import { DailyHourWork } from "../components/DailyHourWork";

import styled from "@emotion/styled";

const UList = styled.ul`
  margin: 0;
  padding: 0;
  min-width: 100vw;
`;
// TODO:
// CLICK ON INPUT THEN ABLE TO EDIT TIME.
export const WeeklyHours = () => {
  const { weekHrLog, updateWeekHrLog } = useContext(WeekHourLogContext);

  function handelHrUpdate(dayKey) {
    const dayRefID = dayKey;
    console.log(weekHrLog[dayRefID]);
    updateWeekHrLog();
  }

  return (
    <UList>
      {weekHrLog.map((dayInput, dayKey) => {
        return (
          <DailyHourWork
            handelHrUpdate={handelHrUpdate}
            dailyHrs={dayInput}
            Key={dayKey}
            dayKey={dayKey}
          />
        );
      })}
    </UList>
  );
};

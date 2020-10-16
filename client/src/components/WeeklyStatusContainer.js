import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { weeklyStatusDefault } from "../helpers/weeklyStatusDefault";
import { calculateDailyHours } from "../helpers/calculateDailyHours";

import { useWeeklyHour } from "../context/weeklyHourContext";

import WeeklyHours from "./WeeklyHours";

const inputConainters = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const WeeklyStatusContainer = () => {
  const { weeklyStatus, setWeeklyStatus } = useWeeklyHour();
  const [currentDayStatus, setCurrentDayStatus] = useState([]);

  useEffect(() => {
    // needs to add item to the context
    console.log(currentDayStatus);

    // should add multiple values of the same day
    // should have only the days that are active
  }, [currentDayStatus]);

  function updateStatus(updateItem) {
    setCurrentDayStatus([...currentDayStatus, updateItem]);
  }

  return (
    <div css={inputConainters}>
      {weeklyStatusDefault.map((dailyStatus) =>
        dailyStatus.isActive ? (
          <WeeklyHours
            key={dailyStatus.id}
            weekday={dailyStatus}
            updateStatus={updateStatus}
          />
        ) : (
          <h4 key={dailyStatus.id}>Not Scheduled for {dailyStatus.day}</h4>
        )
      )}
    </div>
  );
};
export default WeeklyStatusContainer;

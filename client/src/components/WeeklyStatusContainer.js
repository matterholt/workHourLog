import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { weeklyStatusDefault } from "../helpers/weeklyStatusDefault";
import { useUpdateWeeklyHrs } from "../hooks/useUpdateWeeklyHrs";

import DailyHours from "./DailyHours";

const inputContainer = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const WeeklyStatusContainer = () => {
  const { currentDay, setCurrentDay } = useUpdateWeeklyHrs([]);

  return (
    <div css={inputContainer}>
      {weeklyStatusDefault.map((dailyStatus) =>
        dailyStatus.isActive ? (
          <DailyHours
            key={dailyStatus.id}
            weekday={dailyStatus}
            updateStatus={setCurrentDay}
          />
        ) : (
          <h4 key={dailyStatus.id}>Not Scheduled for {dailyStatus.day}</h4>
        )
      )}
    </div>
  );
};
export default WeeklyStatusContainer;

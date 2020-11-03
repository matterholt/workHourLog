import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import DailyHourLog from "./DailyHourLog";

import { standardSettingForDay } from "../helpers/standardDefaults/standardSettingForDay";

import { useLocalStorage } from "../hooks/useLocalStorage";

const inputContainer = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const WeeklyLogsContainer = ({ updateWeeklyHours }) => {
  const [activeDay, setActiveDay] = useState(() => standardSettingForDay);
  const [userDefaultHrs] = useLocalStorage("defaultHrs");

  return (
    <div css={inputContainer}>
      {activeDay.map((dailyStatus) =>
        dailyStatus.isActive ? (
          <DailyHourLog
            key={dailyStatus.id}
            weekday={dailyStatus}
            defaultHours={userDefaultHrs}
            updateWeeklyHours={updateWeeklyHours}
          />
        ) : (
          <h4 key={dailyStatus.id}>Not Scheduled for {dailyStatus.day}</h4>
        )
      )}
    </div>
  );
};
export default WeeklyLogsContainer;

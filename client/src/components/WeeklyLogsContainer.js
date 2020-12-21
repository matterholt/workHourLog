import  { useState } from "react";
/** @jsxImportSource @emotion/core */
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
  // update the hours calculated here???

  return (
    <div css={inputContainer}>
      <ul>
        {activeDay.map((dailyStatus) =>
          dailyStatus.isActive ? (
            <DailyHourLog
              key={dailyStatus.id}
              weekday={dailyStatus}
            />
          ) : (
            <h4 key={dailyStatus.id}>Not Scheduled for {dailyStatus.day}</h4>
          )
        )}
      </ul>
    </div>
  );
};
export default WeeklyLogsContainer;

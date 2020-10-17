import React, { useState, useCallback } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { useUpdateWeeklyHrs } from "../hooks/useUpdateWeeklyHrs";

import DailyHourLog from "./DailyHourLog";

const inputContainer = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const WeeklyLogsContainer = () => {
  const [hoursLogged, updateHoursLogged] = useState([]);
  const { currentDay, setCurrentDay } = useUpdateWeeklyHrs();
  const [defaultHours, setDefaultHours] = useState({
    clockIn: "08:00",
    clockOut: "16:30",
    hourWorked: 8,
    lunch: 0.5,
  });

  const addHourslogTo = (data) => {
    const dayId = data.id;
    let notChangedHours = hoursLogged.filter((dayLog) => dayLog.id !== dayId);
    updateHoursLogged([...notChangedHours, data]);
  };

  return (
    <div css={inputContainer}>
      {JSON.stringify(hoursLogged)}
      {currentDay.map((dailyStatus) =>
        dailyStatus.isActive ? (
          <DailyHourLog
            key={dailyStatus.id}
            defaultHours={defaultHours}
            weekday={dailyStatus}
            updateStatus={addHourslogTo}
          />
        ) : (
          <h4 key={dailyStatus.id}>Not Scheduled for {dailyStatus.day}</h4>
        )
      )}
    </div>
  );
};
export default WeeklyLogsContainer;

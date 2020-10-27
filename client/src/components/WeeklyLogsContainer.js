import React, { useState, useCallback } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import DailyHourLog from "./DailyHourLog";
import { weeklyStatusDefault } from "../helpers/weeklyStatusDefault";

const inputContainer = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const WeeklyLogsContainer = () => {
  const [activeDay, seActiveDay] = useState(() => weeklyStatusDefault);

  // const [dailyTimeLog, setDailyTimeLog] = useState({
  //   dailyClockIn: "08:00",
  //   dailyClockOut: "16:00",
  //   dailyHoursWorked: "888",
  // });

  // useEffect(() => {
  //   const totalHrs = calculateDailyHours(dailyTimeLog);
  //   setDailyTimeLog({ ...dailyTimeLog, dailyHoursWorked: totalHrs });
  // }, [dailyTimeLog, setDailyTimeLog]);

  // function UpdateWkHrst(e) {
  //   const { id, value } = e.target;
  //   setDailyTimeLog({ ...dailyTimeLog, [id]: value });
  // }
  
  return (
    <div css={inputContainer}>
      {activeDay.map((dailyStatus) =>
        dailyStatus.isActive ? (
          <DailyHourLog key={dailyStatus.id} weekday={dailyStatus} />
        ) : (
          <h4 key={dailyStatus.id}>Not Scheduled for {dailyStatus.day}</h4>
        )
      )}
    </div>
  );
};
export default WeeklyLogsContainer;

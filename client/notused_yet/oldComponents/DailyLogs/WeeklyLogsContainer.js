import { useState } from "react";
/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import DailyHourLog from "./DailyHourLog";

import { standardSettingForDay } from "../../helpers/standardDefaults/standardSettingForDay";

const inputContainer = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

`;

const WeeklyLogsContainer = () => {
  const [localStore, setLocalStore] = useState(standardSettingForDay );

  function updateHourLogStorage(dayUpdate) {
    const copyLogLocal = localStore;
    const dayIndex = copyLogLocal.findIndex(
      (dayId) => dayId.id === dayUpdate.id
    );
    copyLogLocal.splice(dayIndex, 1, dayUpdate);
    
    setLocalStore(copyLogLocal);
  }

  function resetWeek() {
    console.log('reset it')
    setLocalStore(standardSettingForDay);
  }

  return (
    <div css={inputContainer}>
      <button onClick={resetWeek}>Reset</button>
      <ul>
        {localStore.map((dailyStatus) => (
          <DailyHourLog
            key={dailyStatus.id}
            weekday={dailyStatus}
            updateHourLogStorage={updateHourLogStorage}
          />
        ))}
      </ul>
    </div>
  );
};
export default WeeklyLogsContainer;

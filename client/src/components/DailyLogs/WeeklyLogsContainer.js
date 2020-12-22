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
  const [localStore, setLocalStore] = useState(() =>{
    const keySaved = window.localStorage.getItem('hourlog');
    if (keySaved) {
      return JSON.parse(keySaved);
    } else {
      return standardSettingForDay;
  }});


 
  function updateHourLogStorage(dayUpdate) {
    const copyLogLocal = localStore;
    const dayIndex = localStore.findIndex(
      (dayId) => dayId.id === dayUpdate.id
    );
    copyLogLocal.splice(dayIndex, 1, dayUpdate);
    
    setLocalStore(copyLogLocal);
    window.localStorage.setItem("hourlog", JSON.stringify(localStore));
  }

  return (
    <div css={inputContainer}>
      <button onClick={() => window.localStorage.removeItem("hourlog")}>
        Reset
      </button>
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

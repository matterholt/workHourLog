import { useState, useEffect } from "react";
/** @jsxImportSource @emotion/core */
import { css, jsx } from "@emotion/core";
import DailyHourLog from "./DailyHourLog";

import { standardSettingForDay } from "../../helpers/standardDefaults/standardSettingForDay";

import { useLocalStorage } from "../../hooks/useLocalStorage";

const inputContainer = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

`;

const WeeklyLogsContainer = () => {
  const [localStore, setLocalStore] = useState(() =>{
    const key = 'hourLog'
    const valueInLocalStorage = window.localStorage.getItem(key);
      console.log(valueInLocalStorage);
    if (valueInLocalStorage) {
      JSON.parse(valueInLocalStorage);
    }else{
    return standardSettingForDay;
    }
    
    });

  // useEffect(() => {
  //    window.localStorage.setItem("hourLog", JSON.stringify(localStore));
  // }, [localStore]);
  

 
  function updateHourLogStorage(dayUpdate) {
    const copyLogLocal = localStore;
    const dayIndex = localStore.findIndex(
      (dayId) => dayId.id === dayUpdate.id
    );
    copyLogLocal.splice(dayIndex, 1, dayUpdate);
    setLocalStore(copyLogLocal);
  }

  return (
    <div css={inputContainer}>
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

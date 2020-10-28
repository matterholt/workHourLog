import React, {  useContext  } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

import { companyRecommendedTime } from "../helpers/companyRecommendedTime";
const WeeklyHourContext = React.createContext();
function WeeklyHourProvider({ children }) {
  const [weeklyStatusDefault, setWeeklyStatusDefault] = useLocalStorage(
    "defaultHrs",
    companyRecommendedTime
  );

  return (
    <WeeklyHourContext.Provider value={{ weeklyStatusDefault, setWeeklyStatusDefault }}>
      {children}
    </WeeklyHourContext.Provider>
  );
}

function useWeeklyHour() {
  const context = useContext(WeeklyHourContext);
  if (context === undefined) {
    throw new Error(
      "useWeeklyHour must be used within a WeeklyHourContext Provider"
    );
  }
  return context;
}

export { WeeklyHourProvider, useWeeklyHour };

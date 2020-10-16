import React, { useState, useContext, useEffect } from "react";

const WeeklyHourContext = React.createContext();

function WeeklyHourProvider({ children }) {
  const [weeklyStatus, setWeeklyStatus] = useState([]);

  return (
    <WeeklyHourContext.Provider value={{ weeklyStatus, setWeeklyStatus }}>
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

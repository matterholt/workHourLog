import React, { useState, useEffect } from "react";

// components made for app
import Header from "./components/Header";
import { TaskBar } from "./components/TaskBar";

// Main section for  application
import { WeeklyHours } from "./appSections/WeeklyHours";

// Context for default hours
import { DefaultHrContext } from "./context/DefaultHrContext";
import { WeekHourLogContext } from "./context/WeekHourLogContext";

const App = () => {
  // convert to useReducer
  const [workingHrs, SetWorkingHrs] = useState({
    start: "07:00",
    quit: "16:00",
    lunch: 0.5,
  });
  const [weekHrLog, updateWeekHrLog] = useState([]);

  useEffect(() => {
    console.log("weekly hours");
    console.log(weekHrLog);
  }, []);

  return (
    <DefaultHrContext.Provider value={{ workingHrs, SetWorkingHrs }}>
      <Header />
      <WeekHourLogContext.Provider value={{ weekHrLog, updateWeekHrLog }}>
        <TaskBar />
        <WeeklyHours />
      </WeekHourLogContext.Provider>
    </DefaultHrContext.Provider>
  );
};

export default App;

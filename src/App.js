import React, { useState } from "react";

// components made for app
import Header from "./components/Header";
import { TaskBar } from "./components/TaskBar";

// Main section for  application
import { WeeklyHours } from "./appSections/WeeklyHours";

// Context for default hours
import { DefaultHrContext } from "./context/DefaultHrContext";

const App = () => {
  // convert to useReducer
  const [workingHrs, SetWorkingHrs] = useState({
    start: "07:00",
    quit: "16:00",
    lunch: 0.5,
  });

  return (
    <DefaultHrContext.Provider value={{ workingHrs, SetWorkingHrs }}>
      <Header />
      <TaskBar />

      <WeeklyHours />
    </DefaultHrContext.Provider>
  );
};

export default App;

import React, { useState } from "react";

import Header from "./components/Header";
import { TaskBar } from "./components/TaskBar";

import { WeeklyHours } from "./appSections/WeeklyHours";

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

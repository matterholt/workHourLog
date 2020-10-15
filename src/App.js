import React, { useState, useEffect } from "react";

// components made for app
import Header from "./components/Header";
import { TaskBar } from "./compoÍnents/TaskBar";

// Main section for  application
import { WeeklyHours } from "./appSections/WeeklyHours";

// Context for default hours
import { DefaultHrContext } from "./context/DefaultHrContext";
import { WeekHourLogContext } from "./context/WeekHourLogContext";

const flex = [
  { min: ["00", "01"], round: "00", hour: 0.0 },
  { min: ["03", "04", "05", "06", "07", "09"], round: "06", hour: 0.1 },
  { min: ["09", "10", "11", "12", "13", "14"], round: "12", hour: 0.2 },
  { min: ["15", "16", "17", "18", "19", "20"], round: "18", hour: 0.3 },
  { min: ["21", "22", "23", "24", "25", "26"], round: "24", hour: 0.4 },
  { min: ["27", "28", "29", "30", "31", "32"], round: "30", hour: 0.5 },
  { min: ["33", "34", "35", "36", "37", "38"], round: "36", hour: 0.6 },
  { min: ["39", "40", "41", "42", "43", "44"], round: "42", hour: 0.7 },
  { min: ["45", "46", "47", "48", "49", "50"], round: "48", hour: 0.8 },
  { min: ["51", "52", "53", "54", "55", "56"], round: "54", hour: 0.9 },
  { min: ["57", "58", "59"], round: "00", hour: 0.0 },
];

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
  }, [weekHrLog]);

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

import React from "react";

const standardWorkingHours = {
  start: "07:00",
  quit: "16:00",
  lunch: 0.5,
};

export const DefaultHrContext = React.createContext(standardWorkingHours);

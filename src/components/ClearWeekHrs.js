// auto generates teh week hour using default hours!
// will use a global context for hours of the week.
// all actions no
import React, { useContext } from "react";
import { WeekHourLogContext } from "../context/WeekHourLogContext";

import { ActionButton } from "../components/style/ActionButton";

export const ClearWeekHr = () => {
  const { updateWeekHrLog } = useContext(WeekHourLogContext);

  function clearWeekHours() {
    updateWeekHrLog([]);
  }

  return <ActionButton onClick={clearWeekHours}> Clear</ActionButton>;
};

import React, { useState, useEffect } from "react";

const useTotalHrsWorked = (weeklyStatus) => {
  const [currentHrsWorked, UpdateCurrentHrsWorked] = useState();

  useEffect(() => {
    const dailyHrs = weeklyStatus.map((day) => day.hrs);
    const sumHours = dailyHrs.reduce((result, item) => {
      return result + item;
    }, 0);

    UpdateCurrentHrsWorked(sumHours);
  }, [weeklyStatus, currentHrsWorked]);

  return [currentHrsWorked, UpdateCurrentHrsWorked];
};

export { useTotalHrsWorked };

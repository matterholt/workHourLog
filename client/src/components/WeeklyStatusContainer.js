import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { weeklyStatusDefault } from "../helpers/weeklyStatusDefault";
import { calculateDailyHours } from "../helpers/calculateDailyHours";

import { useWeeklyHour } from "../context/weeklyHourContext";

const WeeklyHours = ({ weekday, updateStatus }) => {
  const [clockIn, setClockIn] = useState("08:00");
  const [clockOut, setClockOut] = useState("16:30");
  const [dailyHours, setDailyHours] = useState("0");

  const { id, day, isActive, hrs } = weekday;

  useEffect(() => {
    // update the hours worked when time is updated
    const lunch = "30"; // future feature
    const PTO = "0"; // future feature
    const totalHrs = calculateDailyHours(clockIn, clockOut);
    setDailyHours(totalHrs);
  }, [clockIn, clockOut, setDailyHours]);

  function handleHrUpdate(e) {
    setClockIn(e.target.value);
    updateStatus({ id, day, dailyHours });
  }

  // useReducer update the

  return (
    <div>
      <h4>{day}</h4>
      <label htmlFor="clockIn">
        Clocked In:
        <input
          id="clockIn"
          type="time"
          value={clockIn}
          onChange={handleHrUpdate}
        />
      </label>

      <label htmlFor="clockOut">
        Clocked Out:
        <input
          id="clockOut"
          type="time"
          value={clockOut}
          onChange={(e) => {
            setClockOut(e.target.value);
          }}
        />
      </label>

      <label htmlFor="hoursWorked">
        Hours Worked:
        <input
          readOnly={true}
          id="hoursWorked"
          type="number"
          value={dailyHours}
        />
      </label>
    </div>
  );
};

const WeeklyStatusContainer = () => {
  const { weeklyStatus, setWeeklyStatus } = useWeeklyHour();
  const [currentDayStatus, setCurrentDayStatus] = useState([]);

  useEffect(() => {
    // needs to add item to the context
    console.log(currentDayStatus);

    // should add multiple values of the same day
    // should have only the days that are active
  }, [currentDayStatus]);

  function updateStatus(updateItem) {
    setCurrentDayStatus([...currentDayStatus, updateItem]);
  }

  return (
    <div>
      {weeklyStatusDefault.map((dailyStatus) =>
        dailyStatus.isActive ? (
          <WeeklyHours
            key={dailyStatus.id}
            weekday={dailyStatus}
            updateStatus={updateStatus}
          />
        ) : (
          <h1 key={dailyStatus.id}>Not Scheduled for {dailyStatus.day}</h1>
        )
      )}
    </div>
  );
};
export default WeeklyStatusContainer;

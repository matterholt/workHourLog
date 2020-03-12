import React, { useState, useEffect } from "react";
import { Default } from "../data/temp_defaultHours";

import CardData from "./CardData";
import "../style/tableChart.css";

import calculateDailyHours from "../hoursCal";

// Heading for the Hour log table
function HourHeader() {
  return (
    <tr>
      <th>Day</th>
      <th>Punch In </th>
      <th>Punch Out</th>
      <th>Hours Work</th>
      <th>update</th>
    </tr>
  );
}

// Perform updates to the table via modal
function ModalUpdate(props) {
  return (
    <div className="modelCard">
      <div className="modal">
        <h3>UPDATES TO {props.day}</h3>
        <label>
          <input
            type="time"
            value={props.start}
            name="punchIn"
            onChange={e => {
              props.updateHrDay(e);
            }}
          />{" "}
          <br />
          Punch In
        </label>
        <label>
          <input
            type="time"
            name="punchOut"
            value={props.quit}
            onChange={e => {
              props.updateHrDay(e);
            }}
          />
          <br />
          Punch Out
        </label>
        <div className="buttonContianer">
          <button onClick={props.totalDailyHrs}> Confirm</button>
          <button onClick={props.visualUpdate}>Close</button>
        </div>
      </div>
    </div>
  );
}

// Row data to process
function RowData(props) {
  const [isShow, updateShow] = useState(false);
  const [dailyHour, updateDailyHr] = useState({
    punchIn: "",
    punchOut: "",
    workingHrs: "0"
  });
  function updateVisualShow() {
    updateShow(!isShow);
  }
  function workHourThisDay(e) {
    const inputName = e.target.name;
    updateDailyHr({
      ...dailyHour,
      [inputName]: e.target.value
    });
  }
  function dailyWorkHrs() {
    updateShow(!isShow);
    const totalHrs = calculateDailyHours(dailyHour.punchIn, dailyHour.punchOut);
    updateDailyHr({ ...dailyHour, ["workingHrs"]: totalHrs });
  }
  useEffect(() => {
    const totalHrs = calculateDailyHours(Default.start, Default.quit);
    updateDailyHr({
      ["punchIn"]: Default.start,
      ["punchOut"]: Default.quit,
      ["workingHrs"]: totalHrs
    });
  }, []);
  useEffect(() => {
    if (dailyHour["workingHrs"] != null) {
      props.hrFunc(props.dayOfwk, dailyHour["workingHrs"]);
    }
  }, [dailyHour]);

  return (
    <tr key={props.idKey}>
      <td> {props.dayOfwk}</td>
      <td> {dailyHour.punchIn}</td>
      <td> {dailyHour.punchOut}</td>
      <td> {dailyHour.workingHrs} </td>
      <td className="modalContainer">
        <button onClick={updateVisualShow}>Update</button>
        {isShow ? (
          <ModalUpdate
            visualUpdate={updateVisualShow}
            updateHrDay={workHourThisDay}
            totalDailyHrs={dailyWorkHrs}
            day={props.day}
            start={dailyHour.punchIn}
            quit={dailyHour.punchOut}
          />
        ) : null}
      </td>
    </tr>
  );
}

function TableSimpleHr() {
  const [days, updateDays] = useState([]);
  const [isFull, switchIsFull] = useState(false);
  const [numberOfDay, updateNumberOfDay] = useState(1);
  const [weeklyHrs, updateWeeklyHrs] = useState({});
  const [totalhrs, updateTotalHRs] = useState(0);

  // Change the the list.
  function ListOfDays() {
    const daysOfweek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    let daysToRecord = [];
    updateNumberOfDay(numberOfDay + 1);
    if (numberOfDay <= 5) {
      for (let i = 0; i < numberOfDay; i++) {
        daysToRecord.push(daysOfweek[i]);
      }
      updateDays(daysToRecord);
    } else {
      switchIsFull(!isFull);
    }
  }
  function resetTable() {
    updateDays([]);
    switchIsFull(false);
    updateNumberOfDay(1);
    updateWeeklyHrs([]);
    updateTotalHRs(0);
  }
  function weeklyWorkedHours(name, value) {
    if (value != 0) {
      updateWeeklyHrs({
        ...weeklyHrs,
        [name]: value
      });
    }
  }

  useEffect(() => {
    //console.log(weeklyHrs);
    const weeklyValues = Object.values(weeklyHrs);

    if (weeklyValues != 0) {
      const sum = (acc, curr) => acc + curr;
      const reducHr = weeklyValues.reduce(sum);
      updateTotalHRs(reducHr);
    }
  }, [weeklyHrs]);

  return (
    <CardData>
      {!isFull ? (
        <button onClick={ListOfDays}>ADD IT</button>
      ) : (
        <button onClick={resetTable}>CLEAR</button>
      )}
      <button onClick={resetTable}>CLEAR</button>
      <h1> Weekly Data Table </h1>
      <h2> Total Hours : {totalhrs} </h2>
      <table>
        <HourHeader />
        {days.map((day, idKey) => {
          return (
            <RowData dayOfwk={day} idKey={idKey} hrFunc={weeklyWorkedHours} />
          );
        })}
      </table>
    </CardData>
  );
}

export default TableSimpleHr;

/*

How to clear / reset the hours for the table

*/

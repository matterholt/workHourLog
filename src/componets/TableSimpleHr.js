import React, { useState, useEffect } from "react";
import CardData from "./CardData";
import "../style/tableChart.css";
// Heading for the Hour log table
function HourHeader(props) {
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
  // UPDATE FUNCTION TO UPDATE HOURS
  const [startTime, updateStartTime] = useState("");
  const [quitTime, updateQuitTime] = useState("");

  useEffect(() => {
    updateStartTime(props.start);
    updateQuitTime(props.quit);
  }, []);

  return (
    <div className="modal">
      <h3>UPDATES TO {props.day}</h3>
      <label>
        <input
          type="time"
          value={startTime}
          onChange={e => {
            updateStartTime(e.target.value);
          }}
        />{" "}
        <br />
        Punch In
      </label>
      <label>
        <input
          type="time"
          value={quitTime}
          onChange={e => {
            updateQuitTime(e.target.value);
          }}
        />
        <br />
        Punch Out
      </label>
      <div className="buttonContianer">
        <button onClick={props.updateFunction}>Confirm</button>
        <button onClick={props.visualUpdate}>close</button>
      </div>
    </div>
  );
}

// Row data to process
function RowData(props) {
  const rowID = props.keyId + 1;
  const [isShow, updateShow] = useState(false);
  const { day, start, quit } = props.rowData;
  function updateVisualShow() {
    updateShow(!isShow);
  }
  return (
    <tr key={rowID}>
      <td> {day}</td>
      <td> {start}</td>
      <td> {quit}</td>
      <td> TDD </td>
      <td className="modalContainer">
        <button onClick={updateVisualShow}>Update</button>
        {isShow ? (
          <ModalUpdate
            visualUpdate={updateVisualShow}
            day={day}
            start={start}
            quit={quit}
            updateFunction={props.updateFunction}
          />
        ) : null}
      </td>
    </tr>
  );
}

function TableSimpleHr() {
  const [wklyHours, updateWklyHrs] = useState({
    1: { day: "Monday", start: "07:00", quit: "16:00" },
    2: { day: "Tuesday", start: "08:00", quit: "16:00" },
    3: { day: "Wednesday", start: "08:00", quit: "16:00" },
    4: { day: "Thursday", start: "08:00", quit: "16:00" },
    5: { day: "Friday", start: "08:00", quit: "16:00" }
  });
  const weekendWork = {
    6: { day: "Saturday", start: "8:00", quit: "16:00" },
    7: { day: "Sunday", start: "8:00", quit: "16:00" }
  };

  function getRowData() {
    console.log("connect");
    //let thisDaysHrs = wklyHours[rowID]
    //console.log(thisDaysHrs)
  }

  const rowDataLog = Object.values(wklyHours);
  return (
    <CardData>
      <h1> Weekly Data Table </h1>
      <table>
        <HourHeader dailyData={wklyHours} />
        {rowDataLog.map((x, keyId) => {
          return (
            <RowData rowData={x} keyId={keyId} updateFunction={getRowData} />
          );
        })}
      </table>
    </CardData>
  );
}

export default TableSimpleHr;

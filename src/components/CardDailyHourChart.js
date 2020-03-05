import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import CardData from "./CardData";

const Table = styled.table`
  text-align: center;
  grid-column: 2;
  grid-row: 2;
`;
const TableRow = styled.tr`
  height: 25px;
`;
const TableHeader = styled.td`
  background: #829cbc;
  color: black;
`;
const TableData = styled.td`
  width: 100px;
`;
function HeaderTable() {
  return (
    <TableRow>
      <TableHeader>Day</TableHeader>
      <TableHeader>Punch In </TableHeader>
      <TableHeader>Punch Out</TableHeader>
      <TableHeader>Hours Work</TableHeader>
    </TableRow>
  );
}

// build the table row for table
function RowData(props) {
  const arrayWklyHrs = Object.values(props.hoursForWeek);
  console.log(arrayWklyHrs);
}
// should be array of object
function HourChart(props) {
  return (
    <table>
      <HeaderTable />
    </table>
  );
}

function DailyHourChart(props) {
  const [wklyHours, updateWklyHours] = useState({
    1: { day: "Monday", start: "1", quit: "11" },
    2: { day: "Tuesday", start: "2", quit: "22" },
    3: { day: "Wednesday", start: "3", quit: "33" },
    4: { day: "Thursday", start: "4", quit: "44" },
    5: { day: "Friday", start: "5", quit: "55" }
  });
  const [weekendWork, updateWeekendWork] = useState({
    6: { day: "Monday", start: "", quit: "" },
    7: { day: "Tuesday", start: "", quit: "" }
  });

  useEffect(() => {
    // hacked, not sure if the best method to accomplish
    // problem with this is that it refreshes with every page render,

    // TODO have to add a if statement to check the value, if values is none /null then add defaults

    // change in to a function that would bring in the state, and default time
    for (let i in wklyHours) {
      if (wklyHours.hasOwnProperty(i)) {
        updateWklyHours((wklyHours[i].start = props.defaults.startTime));
        updateWklyHours((wklyHours[i].quit = props.defaults.endTime));
      }
    }
    console.log(wklyHours);
  }, []);

  return (
    <CardData>
      <h2>Weekly Hours Log</h2>
      <HourChart />
    </CardData>
  );
}

export default DailyHourChart;

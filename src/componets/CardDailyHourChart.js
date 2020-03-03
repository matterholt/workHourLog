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

function RowData(props) {
  const arrayWklyHrs = Object.values(props.hoursForWeek);
  console.log(arrayWklyHrs);
  const rowData = arrayWklyHrs.map((dailyLog, idKey) => {
    return (
      <TableRow>
        <TableData>{dailyLog.day}</TableData>
        <TableData>{dailyLog.start}</TableData>
        <TableData>{dailyLog.quit}</TableData>
        <TableData>"Not"</TableData>
      </TableRow>
    );
  });
  return rowData;
}
// should be array of object
function HourChart(props) {
  return (
    <Table>
      <TableRow>
        <TableHeader>Day</TableHeader>
        <TableHeader>Punch In </TableHeader>
        <TableHeader>Punch Out</TableHeader>
        <TableHeader>Hours Work</TableHeader>
      </TableRow>
      <RowData dailyLog={props.hoursForWeek} />
    </Table>
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

  return (
    <CardData>
      <h2>Weekly Hours Log</h2>
      <HourChart hoursForWeek={wklyHours} />
    </CardData>
  );
}

export default DailyHourChart;

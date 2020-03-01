import React, { useState } from "react";
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
  return (
    <TableRow>
      <TableData>{props.day}</TableData>
      <TableData>{props.fakeData.punchIn}</TableData>
      <TableData>{props.fakeData.punchOut}</TableData>
      <TableData>{props.fakeData.worked}</TableData>
    </TableRow>
  );
}
// should be array of object
function HourChart(pros) {
  const [fakeData, UpdateData] = useState({
    day: "Mon",
    punchIn: "08:00",
    punchOut: "16:30",
    worked: "8"
  });
  return (
    <Table>
      <TableRow>
        <TableHeader>Day</TableHeader>
        <TableHeader>Punch In </TableHeader>
        <TableHeader>Punch Out</TableHeader>
        <TableHeader>Hours Work</TableHeader>
      </TableRow>
      <RowData fakeData={fakeData} day="Mon" />
      <RowData fakeData={fakeData} day="Tues" />
      <RowData fakeData={fakeData} day="Wed" />
      <RowData fakeData={fakeData} day="Thurs" />
      <RowData fakeData={fakeData} day="Fri" />
    </Table>
  );
}

function DailyHourChart() {
  return (
    <CardData>
      <h2>Weekly Hours Log</h2>
      <HourChart />
    </CardData>
  );
}

export default DailyHourChart;

import React, { useState } from "react";
import styled from "@emotion/styled";

const Table = styled.table`
  margin: 10px;
  text-align: center;
`;
const TableRow = styled.tr`
  background: whitesmoke;
  padding: 15px;
  height: 50px;
`;
const TableHeader = styled.th`
  padding: 10px;
  background: #829cbc;
  color: black;
`;
const TableData = styled.td`
  padding: 10px;
  width: 100px;
`;
function DailyHourChart() {
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
      <TableRow>
        <TableData>{fakeData.day}</TableData>
        <TableData>{fakeData.punchIn}</TableData>
        <TableData>{fakeData.punchOut}</TableData>
        <TableData>{fakeData.worked}</TableData>
      </TableRow>
    </Table>
  );
}

export default DailyHourChart;

import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import TableSimpleHr from "./components/TableSimpleHr";

import styled from "@emotion/styled";
import "./style/WkDay.css";
const OverTable = styled.div`
  height: 75%;
  grid-column: 2;
  grid-row: 2;
  display: flex;
  flex-flow: column;
  padding: 5px;
`;

// user Pref should be context,
const App = () => {
  const [hourLog, upDateHourLog] = useState([]);
  const [userBaseValue, updateUserBaseValue] = useState({
    username: "testiner",
    startTime: "08:00",
    endTime: "16:30",
    lunchTime: "0.5",
  });

  const [isModalView, updateModalView] = useState({
    modalTable: true, // blur out the any of the modals,
  });

  return (
    <div className="week">
      <Header />
      <OverTable>
        <TableSimpleHr modalDisp={isModalView.modalTable} />
      </OverTable>
    </div>
  );
};

export default App;

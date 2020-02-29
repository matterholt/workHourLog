import React, { useState } from "react";
import styled from "@emotion/styled";
import ToggleButton from "./ToggleButton";

const SideNav = styled.nav`
  display: flex;
  flex-flow: column;
  align-content: center;
  background-color: white;
  grid-column: 1;
  grid-row: 2/4;
`;
/*
function UpdateHr() {
  const [inputModal, switchInputModal] = useState(false);
  function toggleSwitch() {
    console.log("fire");
    switchInputModal(!inputModal);
  }

  return (
    <div>
      {inputModal ? (
        <>
          <AddHour toggle={toggleSwitch} />
          <AddNewHours toggle={toggleSwitch} />
        </>
      ) : (
        <AddNewHours toggle={toggleSwitch} />
      )}
    </div>
  );
}

function dataTable({ hourLog }) {
  // returns a table for hours of the week
  return (
    <div>
      <DailyHourChart hourLogs={hourLog} />
    </div>
  );
}
*/

const ToggleStyle = styled.button`
  margin: 0;
  padding: 2px;
  height: 50px;
`;
const SideBar = props => {
  return (
    <SideNav>
      <ToggleStyle name="settings" onClick={props.visualModal}>
        Settings
      </ToggleStyle>
      <ToggleStyle name="settings" onClick={props.visualModal}>
        TWO
      </ToggleStyle>
    </SideNav>
  );
};

export default SideBar;

import React, { useState } from "react";
import styled from "@emotion/styled";
import ToggleButton from "./ToggleButton";

const SideNav = styled.nav`
  display: flex;
  flex-flow: column;
  align-content: center;
  background-color: #13293d;
  grid-column: 1;
  grid-row: 2/4;
`;

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
      <ToggleStyle name="addHours" onClick={props.visualModal}>
        Add Hour
      </ToggleStyle>
      <ToggleStyle name="clear">Clear</ToggleStyle>
    </SideNav>
  );
};

export default SideBar;

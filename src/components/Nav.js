import React, { useState } from "react";
import styled from "@emotion/styled";
import ButtonComp from "./ButtonComp";

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
      <ButtonComp name="settings" action={props.visualModal}>
        Settings
      </ButtonComp>
      <ButtonComp name="addHours" action={props.visualModal}>
        Add Hour
      </ButtonComp>
      <ButtonComp name="clear">Clear</ButtonComp>
    </SideNav>
  );
};

export default SideBar;

import React from "react";
import styled from "@emotion/styled";
const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 550px;
  position: relative;
  background: white;
  grid-column: 1/3;
  grid-column: 1/4;
`;

function Header() {
  return (
    <HeaderDiv>
      <h1>Weekly Hours</h1>
    </HeaderDiv>
  );
}

export default Header;

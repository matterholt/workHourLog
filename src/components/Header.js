import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width: 550px;
  position: relative;
  background-color: #13293d;
  color: white;
  grid-column: 1/3;
  grid-column: 1/4;
`;

function Header() {
  const [date, updateDate] = useState();

  useEffect(() => {
    let today = new Date();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let year = today.getFullYear();
    let currentDateFormat = `${month} / ${day} / ${year}`;
    updateDate(currentDateFormat);
  });

  return (
    <HeaderDiv>
      <h1>Weekly Hours</h1>
      {date}
    </HeaderDiv>
  );
}

export default Header;

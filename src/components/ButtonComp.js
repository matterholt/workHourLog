import React from "react";
import styled from "@emotion/styled";
// add more style to the the toggle button

const ToggleStyle = styled.button`
  margin: 0;
  padding: 2px;
  height: 50px;
  margin: 5px;
`;

export default function ButtonComp(props) {
  return (
    <ToggleStyle onClick={props.action} name={props.name}>
      {props.children}
    </ToggleStyle>
  );
}

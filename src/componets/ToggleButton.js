import React from "react";
import styled from "@emotion/styled";
// add more style to the the toggle button

const ToggleStyle = styled.button`
  width: 50px;
  height: 35px;
  border-radius: 10px;
`;

export default function ToggleButton(props) {
  return <ToggleStyle onClick={props.toggle}>{props.children}</ToggleStyle>;
}

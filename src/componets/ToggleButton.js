import React from "react";
import styled from "@emotion/styled";
// add more style to the the toggle button

const ToggleStyle = styled.button`
  border-radius: 10px;
  width: 100%;
`;

export default function ToggleButton(props) {
  return <ToggleStyle onClick={props.toggle}>{props.children}</ToggleStyle>;
}

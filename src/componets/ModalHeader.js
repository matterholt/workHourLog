import React from "react";
import styled from "@emotion/styled";
import ToggleButton from "./ToggleButton";

const TitleBarDiv = styled.div`
  display: flex;
  width: auto;
  justify-content: space-between;
  align-items: center;
  background: #829cbc;
  border-radius: 5px 5px 0 0;
`;
const H2title = styled.h2`
  margin-bottom: 0px;
  margin-top: 0px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
`;
function ModalHeader(props) {
  return (
    <TitleBarDiv>
      <H2title> {props.title}</H2title>
      <ToggleButton toggle={props.toggle}>close</ToggleButton>
    </TitleBarDiv>
  );
}

export default ModalHeader;

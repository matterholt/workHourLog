import React from "react";

import styled from "@emotion/styled";

const Toggle = styled.div`
  position: relative;
  display: inline-block;
  width: 75px;
  vertical-align: middle;
  text-align: left;
  user-select: none;
  }
`;

const InnerSpan = styled.span`
  display: block;
  width: 200%;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
    &:before{
      content: "Yes";
      text-transform: uppercase;
      padding-left: 10px;
      background-color: #f90;
      color: #fff;
  }
  &:after{
      content: "No";
        text-transform: uppercase;
        padding-right: 10px;
        background-color: #ccc;
        color: #fff;
        text-align: right;
  }
  &:before, :after{
      display: block;
      float: left;
      width: 50%;
      height: 34px;
      padding: 0;
      line-height 34px;
      font-size: 14px;
      color: black;
      font-weight: bold;
      box-sizing: border-box;
  }

`;

const ToggleSpan = styled.span`
  display: block;
  width: 24px;
  margin: 5px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #ccc;
  border-radius: 20px;
  transition; all 0.3s ease-in 0s;
  background: ${(props) => (props.disabled ? "#ccc" : "#fff")};
  cursor: ${(props) => (props.disabled ? "not-allow" : "#default")};
`;

const SwitchCheckbox = styled.input`
    display: none;

    &:checked {
      margin-left: 0;
    }
    &:check {
      right: 0px;
    }
  }
`;

const SwitchLabel = styled.label`
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 0 solid #ccc;
  border-radius: 20px;
  margin: 0;
`;

export const ToggleSwitch = (props) => {
  return (
    <Toggle htmlFor="hrsTimeEntryToggle">
      <SwitchCheckbox type="checkbox" name={props.Name} id={props.Name} />
      <SwitchLabel htmlFor={props.Name}>
        <InnerSpan />
        <ToggleSpan />
      </SwitchLabel>
    </Toggle>
  );
};

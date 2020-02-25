import React, { useState } from "react";
import Modal from "./Modal";
import ToggleButton from "./ToggleButton";
import styled from "@emotion/styled";

const HourLogInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
`;
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

const AddButton = styled.button`
  width: 50px;
  height: 35px;
  border-radius: 10px;
`;

export default function AddHour(props) {
  const [punchIn, setPunchIn] = useState("08:00");
  const [punchOut, setPunchOut] = useState("16:00");

  return (
    <Modal>
      <TitleBarDiv>
        <H2title> Add Hours</H2title>
        <ToggleButton toggle={props.toggle}>close</ToggleButton>
      </TitleBarDiv>

      <HourLogInput>
        <label> Punch In: </label>
        <input
          value={punchIn}
          onChange={e => setPunchIn(e.target.value)}
          type="time"
        />
        <label>Punch Out:</label>
        <input
          value={punchOut}
          onChange={e => setPunchOut(e.target.value)}
          type="time"
        />

        <AddButton>ADD</AddButton>
      </HourLogInput>
    </Modal>
  );
}

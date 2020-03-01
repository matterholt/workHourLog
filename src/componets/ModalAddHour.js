import React, { useState } from "react";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import ButtonComp from "./ButtonComp";
import styled from "@emotion/styled";

const HourLogInput = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px;
`;

const AddButton = styled.button`
  width: 50px;
  height: 35px;
  border-radius: 10px;
`;
function AddHours(props) {
  const [punchIn, setPunchIn] = useState("08:00");
  const [punchOut, setPunchOut] = useState("16:00");

  return (
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
  );
}
export default function AddHour(props) {
  if (props.modalView === true) {
    return (
      <Modal>
        <ModalHeader title="Add Hours">
          <ButtonComp name="addHours" action={props.visualModal}>
            close
          </ButtonComp>
        </ModalHeader>
        <AddHours />
      </Modal>
    );
  } else {
    return null;
  }
}

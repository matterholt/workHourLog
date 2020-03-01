import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Modal from "./Modal";

const InputModal = styled.div`
  display: flex;
  flex-flow: column;
  width: 150px;
`;

const ResultW = styled.div`
  display: grid;
  grid-column-template: repeat(3, 3rem);
  border: 0.1rem solid black;
  border-radius: 5px;
  width: 150px;
`;

const Results = props => {
  return (
    <ResultW>
      <div>
        <p>{props.punchIn}</p>
        <p>{props.punchOut}</p>
      </div>
    </ResultW>
  );
};

const OOTHER = () => {
  return (
    <div>
      <InputModal>
        <button>ADD</button>
      </InputModal>
      <Results punchIn="08:00" punchOut="16:30" />
    </div>
  );
};

function AddDailyHour(props) {
  if (props.modelView === true) {
    return (
      <Modal>
        <OOTHER />
      </Modal>
    );
  } else {
    return null;
  }
}

export default AddDailyHour;

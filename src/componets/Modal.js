import React from "react";
import styled from "@emotion/styled";

const ModalDiv = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #f3f4f7;
  width: 550px;
  top: 50px;
  box-shadow: 5px 8px 15px black;
  border-radius: 5px;
  position: absolute;
  z-index: 50;
`;

const Modal = props => {
  return <ModalDiv>{props.children}</ModalDiv>;
};

export default Modal;

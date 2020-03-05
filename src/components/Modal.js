import React from "react";
import styled from "@emotion/styled";

const ModalDiv = styled.div`
  display: flex;
  flex-flow: column;
  background-color: #f3f4f7;
  width: 550px;
  box-shadow: 5px 8px 15px black;
  border-radius: 5px;
  position: relative;
  top: 25px;
  left: 25px;
  z-index: 50;
  opacity: 1;
  transition-property: opacity, left;
  transition-duration: 3s, 5s;
  transition-timing-function: ease-in-out;
`;

const CardModal = props => {
  return <ModalDiv>{props.children}</ModalDiv>;
};

export default CardModal;

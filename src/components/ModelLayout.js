import React from "react";
import styled from "@emotion/styled";

const ModelContainer = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: #353333d9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModelLayout = (props) => {
  return <ModelContainer>{props.children}</ModelContainer>;
};
export default ModelLayout;

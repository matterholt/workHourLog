import React from "react";
import styled from "@emotion/styled";

const ModelContainer = styled.div`
  background-color: gray;
  color: white;
  max-width: 670px;
  padding: 25px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const ModelLayout = (props) => {
  return <ModelContainer>{props.children}</ModelContainer>;
};
export default ModelLayout;

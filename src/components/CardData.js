import React from "react";

import styled from "@emotion/styled";

const DataCard = styled.div`
  margin: 5px;
  background: #ddd;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

function CardData(props) {
  return <DataCard>{props.children}</DataCard>;
}

export default CardData;

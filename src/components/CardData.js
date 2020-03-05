import React from "react";

import styled from "@emotion/styled";

const DataCard = styled.div`
  margin: 5px;
  background: #dba159;
  border-radius: 5px;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

function CardData(props) {
  return <DataCard>{props.children}</DataCard>;
}

export default CardData;

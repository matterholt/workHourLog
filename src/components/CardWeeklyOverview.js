import React from "react";
import CardData from "./CardData";

import styled from "@emotion/styled";
const Title = styled.h2`
  padding: 15px;
`;
function WeeklyOverview() {
  return (
    <CardData>
      <Title>Weekly Review</Title>
    </CardData>
  );
}

export default WeeklyOverview;

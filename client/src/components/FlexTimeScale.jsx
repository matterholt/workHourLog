
import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { flexScale } from "../helpers/flexTimeScale";

const base = css`
  display: grid;
  font-size: 12px;
  text-align: center;
  grid-template-rows: repeat(3, 20px);
  border: solid 1px black;
`;
const minRow = css`
  grid-row: 1;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;
const FlexTime = ({ section }) => {
  const { id, mins, round, percentHour } = section;
  return (
    <div css={base}>
      <div css={minRow}>
        {mins.map((min) => (
          <p key={`min${min}`} style={{ margin: "2px" }}>{min}</p>
        ))}
      </div>
      <div >:{round}</div>
      <div>{percentHour} hr</div>
    </div>
  );
};

const FlexTimeScale = () => (
  <div style={{ display: "flex", justifyContent:'center'}}>
    {flexScale.map((timeRange) => (
      <FlexTime key={timeRange.id} section={timeRange} />
    ))}
  </div>
)

export default FlexTimeScale
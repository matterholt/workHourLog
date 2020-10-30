import React, { useState } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const totalHour_container = css`
  position: fixed;
  top: 0;
  right: 0;
  margin: 10px;
`;

export default function WeeklyTotalHrs  ()  {
  return (
    <div css={totalHour_container}>
      <h1 style={{ textAlign: "center" }}>
        Wkly Hrs
        <br /> {0}
      </h1>
    </div>
  );
};

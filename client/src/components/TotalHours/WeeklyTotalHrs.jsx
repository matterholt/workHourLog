/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const totalHour_container = css`
  position: fixed;
  top: 0;
  right: 0;
  margin: 10px;
`;

export default function WeeklyTotalHrs({ weeklyTimeLog }) {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.dailyHours;
  
  const hoursForWeek = weeklyTimeLog.reduce(reducer,0);
  
  return (
    <div css={totalHour_container}>
      <h1> Hours
        <br /> {hoursForWeek}
      </h1>
    </div>
  );
};

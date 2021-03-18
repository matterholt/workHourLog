/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

import { useItRenders } from "../../hooks/useItRenders";

const tabledata = css`
  background-color: #dbdbdb;
  color: #252222;
  text-align: center;
  font-weight:900;
`;
const hourLogH3 = css`
  color: #252222;
  font-weight: 900;
`;


export default function TableRowData({
  dayId,
  dayOfWeek,
  timeLog,
  updateTimeLog,
  dailyHours = 0,
}) {
  useItRenders(dayOfWeek);

  function updateTime(e, dayId) {
    const { name, value } = e.target;
    updateTimeLog({ dayId, timeLog: { [name]: value } });
  }

  return (
    <tr>
      <td css={tabledata}>{dayOfWeek}</td>
      <td>
        <input
          type="time"
          value={timeLog.clockIn}
          name="clockIn"
          onChange={(e) => updateTime(e, dayId)}
        />
      </td>
      <td>
        <input
          type="time"
          name="clockOut"
          value={timeLog.clockOut}
          onChange={(e) => updateTime(e, dayId)}
        />
      </td>
      <td css={tabledata}>
        <h3 css={hourLogH3}>{dailyHours}</h3>
      </td>
    </tr>
  );
};

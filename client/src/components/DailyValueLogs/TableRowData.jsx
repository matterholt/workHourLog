/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

import { useItRenders } from "../../hooks/useItRenders";

const tabledata = css`
  background-color: #dbdbdb;
  color: gray;
  text-align: center;
`;



export default function TableRowData({ dayId, dayOfWeek,timeLog, updateTimeLog }) {
  useItRenders(dayOfWeek);
  

  function updateTime(e, dayId) {
    const { name, value } = e.target;
    updateTimeLog({ dayId, timeLog:{[name]: value }});
    
  }

  return (
    <tr>
      <td css={tabledata}>{dayOfWeek}</td>
      <td css={tabledata}>
        <input
          type="time"
          value={timeLog.clockIn}
          name="clockIn"
          onChange={(e) => updateTime(e, dayId)}
        />
      </td>
      <td css={tabledata}>
        <input
          type="time"
          name="clockOut"
          value={timeLog.clockOut}
          onChange={(e) => updateTime(e, dayId)}
        />
      </td>
    </tr>
  );
};

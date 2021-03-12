/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useEffect, useState } from 'react';
import { calculateDailyHours } from "../../helpers/calculateDailyHours";
const tabledata = css`
  background-color: #dbdbdb;
  color: gray;
  text-align: center;
`;

const defaultTime = {
  punchIn: "08:00",
  punchOut: "16:30",
};

export default function TableRowData ({ dailyValue, updateWeeklyValues })  {
  const [timePunchIn, setTimePunchIn] = useState(
    () => dailyValue.punchIn || defaultTime.punchIn
  );
  const [timePunchOut, setTimePunchOut] = useState(
    () => dailyValue.punchIn || defaultTime.punchOut
  );
  const [dailyTotal, setDailyTotal] = useState(
    () =>
      dailyValue.totalHours || calculateDailyHours(timePunchIn, timePunchOut)
  );

  //calculate the hours worked
  const updateHours = () => {
    const totalHours = calculateDailyHours(timePunchIn, timePunchOut);
    setDailyTotal(totalHours);
    updateWeeklyValues({ ...dailyValue, totalHours: totalHours });
  };

  function updateTime(e) {
    const { name, value } = e.target;
    if (name === "punchIn") {
      setTimePunchIn(value);
    }
    if (name === "punchOut") {
      setTimePunchOut(value);
    }
    updateWeeklyValues({ ...dailyValue, [name]: value });
    updateHours();
  }

  return (
    <tr>
      <td css={tabledata}>{dailyValue.day}</td>
      <td css={tabledata}>
        <input
          type="time"
          value={timePunchIn}
          name="punchIn"
          onChange={(e) => updateTime(e)}
        />
      </td>
      <td css={tabledata}>
        <input
          type="time"
          name="punchOut"
          value={timePunchOut}
          onChange={(e) => updateTime(e)}
        />
      </td>
      <td css={tabledata}>{dailyTotal}</td>
    </tr>
  );
};

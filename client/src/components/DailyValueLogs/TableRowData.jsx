/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useEffect, useState } from 'react';
import { useItRenders } from "../../hooks/useItRenders";
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

export default function TableRowData({ dayId, dayOfWeek, updateWeeklyValues }) {
useItRenders(dayOfWeek);
  
  const [timePunchIn, setTimePunchIn] = useState(
    defaultTime.punchIn
  );
  const [timePunchOut, setTimePunchOut] = useState(
    defaultTime.punchOut
  );
  const [dailyTotal, setDailyTotal] = useState(0);




  function updateTime(e) {
    const { name, value } = e.target;
     function clockTimeUpdate (){
        if (name === "punchIn") {
           setTimePunchIn(value);
          
        }
        if (name === "punchOut") {
          setTimePunchOut(value);
          }
     }
    clockTimeUpdate()

  }

  useEffect(() => {
    const totalHours = calculateDailyHours(timePunchIn, timePunchOut);
    setDailyTotal(Number(totalHours));
  }, [timePunchIn, timePunchOut]);




  return (
    <tr>
      <td css={tabledata}>{dayOfWeek}</td>
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

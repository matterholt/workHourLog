
import { css, jsx } from '@emotion/react'


const tableData = css`
  background-color: #dbdbdb;
  color: #252222;
  text-align: center;
  font-weight:900;
`;
const hourLogH3 = css`
  color: #252222;
  font-weight: 900;
`;

type TableRowProps = {
  dayId: number;
  dayOfWeek: string;
  timeLog: {
    clockIn: string,
    clockOut: string
  };
  updateWeeklyHours:Function ;
  dailyHours : number;
}


export default function TableRowData({
  dayId,
  dayOfWeek,
  timeLog,
  updateWeeklyHours,
  dailyHours ,
}:TableRowProps) {


  function updateTime(name:string, value:string, dayId:number) {
    updateWeeklyHours({ dayId, timeLog: { [name]: value }});
  }

  return (
    <tr>
      <td css={tableData}>{dayOfWeek}</td>
      <td>
        <input
          type="time"
          value={timeLog.clockIn}
          name="clockIn"
          onChange={(e) => updateTime(e.target.name,e.target.value, dayId)}
        />
      </td>
      <td>
        <input
          type="time"
          name="clockOut"
          value={timeLog.clockOut}
          onChange={(e) => updateTime(e.target.name,e.target.value, dayId)}
        />
      </td>
      <td css={tableData}>
        <h3 css={hourLogH3}>{dailyHours}</h3>
      </td>
    </tr>
  );
};

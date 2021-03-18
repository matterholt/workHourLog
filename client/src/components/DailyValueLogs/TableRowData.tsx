import styled from '@emotion/styled'


const TableData = styled.td`
  background-color: #dbdbdb;
  color: #252222;
  text-align: center;
  font-weight:900;
`;
const TimeLog =styled.h3`
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
      <TableData>{dayOfWeek}</TableData>
      <TableData>
        <input
          type="time"
          value={timeLog.clockIn}
          name="clockIn"
          onChange={(e) => updateTime(e.target.name,e.target.value, dayId)}
        />
      </TableData>
      <TableData>
        <input
          type="time"
          name="clockOut"
          value={timeLog.clockOut}
          onChange={(e) => updateTime(e.target.name,e.target.value, dayId)}
        />
      </TableData>
      <TableData>
        <TimeLog>{dailyHours}</TimeLog>
      </TableData>
    </tr>
  );
};


import {
  hourInput,
  hourInput__container,
  hourInput__day,
  activeInput,
} from "./style/weeklyHour.style";


export default function UpdateTimeLog({
  punchIn,
  handlePunchIn,
  punchOut,
  handlePunchOut,
  hoursWorked,
}) {
  return (
    <>
      <label htmlFor="dailyClockIn" css={hourInput}>
        Clocked In:
        <input
          id="dailyClockIn"
          type="time"
          value={punchIn}
          onChange={handlePunchIn}
        />
      </label>

      <label htmlFor="dailyClockOut" css={hourInput}>
        Clocked Out:
        <input
          id="dailyClockOut"
          type="time"
          value={punchOut}
          onChange={handlePunchOut}
        />
      </label>
      <h2>{hoursWorked}</h2>
    </>
  );
}

import { useState } from 'react';
/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { calculateDailyHours } from "../../helpers/calculateDailyHours";
import { projectTimeLogged } from "../../helpers/projectTimeLogged";


import UpdateTimeLog from "./UpdateTimeLog";

const dailyDisplay = css`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  list-style: none;
  width: 550px;
  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;


export default function DailyHourLog({ weekday, updateHourLogStorage }) {
  const [cellStatus, setCellStatus] = useState("viewer"); //editable
  const [punchIn, setPunchIn] = useState(weekday.punchIn);
  const [punchOut, setPunchOut] = useState(weekday.punchOut);
  const [hoursWorked, setHoursWorked] = useState(weekday.hoursWorked);

  function handlePunchIn(e) {
    const { value } = e.target;
    setPunchIn(value);
    const projectedPunchOutTime = projectTimeLogged(value, hoursWorked);
    setPunchOut(projectedPunchOutTime);
  }

  function handlePunchOut(e) {
    const { value } = e.target;
    setPunchOut(value);
    setHoursWorked(calculateDailyHours(punchIn, value));
  }

  function handleUpdate() {
    setCellStatus("viewer");
    updateHourLogStorage({ ...weekday, punchIn, punchOut, hoursWorked });
  }

  if (weekday.isActive === false) {
    return null;
  }

  if (cellStatus === "editable") {
    return (
      <li css={dailyDisplay}>
        <h3>{weekday.day}</h3>
        <UpdateTimeLog
          punchIn={punchIn}
          handlePunchIn={handlePunchIn}
          punchOut={punchOut}
          handlePunchOut={handlePunchOut}
          hoursWorked={hoursWorked}
        />
        <button onClick={handleUpdate}>Save</button>
      </li>
    );
  }

  if (cellStatus === "viewer") {
    return (
      <li css={dailyDisplay} onClick={() => setCellStatus("editable")}>
        <h3>{weekday.day}</h3>
        <p>{punchIn}</p>
        <p>{punchOut}</p>
        <p>{hoursWorked}</p>
      </li>
    );
  }
}



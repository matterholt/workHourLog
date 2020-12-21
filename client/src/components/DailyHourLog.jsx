import { useState } from 'react';
/** @jsxImportSource @emotion/core */
import { css, jsx } from "@emotion/core";
import { calculateDailyHours } from "../helpers/calculateDailyHours";
import { projectTimeLogged } from "../helpers/projectTimeLogged";


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

export default function DailyHourLog({ weekday }) {
    const [cellStatus, setCellStatus] = useState('viewer') //editable
  const [punchIn, setPunchIn] = useState(weekday.punchIn);
  const [punchOut, setPunchOut] = useState(weekday.punchOut);
  const [hourWorked, setHourWorked] = useState(weekday.hoursWorked);

  function handlePunchIn(e) {
    const { value } = e.target;
    setPunchIn(value);
    const projectedPunchOutTime = projectTimeLogged(value, hourWorked);
    setPunchOut(projectedPunchOutTime);
  }

  function handlePunchOut(e) {
    const { value } = e.target;
    setPunchOut(value);
    setHourWorked(calculateDailyHours(punchIn, value));
  }

    if (weekday.isActive === false) {
      return null;
    }


    if (cellStatus === "editable") {
        return (
          <li css={dailyDisplay}>
            <h3>{weekday.day}</h3>
            <UpdateTimeLog
              w
              punchIn={punchIn}
              handlePunchIn={handlePunchIn}
              punchOut={punchOut}
              handlePunchOut={handlePunchOut}
              hourWorked={hourWorked}
            />
            <button onClick={() => setCellStatus("viewer")}>Save</button>
          </li>
        );
}

    if (cellStatus === "viewer"){
      return (
        <li css={dailyDisplay} onClick={() => setCellStatus("editable")}>
          <h3>{weekday.day}</h3>
          <p>{punchIn}</p>
          <p>{punchOut}</p>
          <p>{hourWorked}</p>
        </li>
      );
    }
}



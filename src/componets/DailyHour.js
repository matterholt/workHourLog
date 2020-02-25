import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Modal from "./Modal";

const InputModal = styled.div`
  display: flex;
  flex-flow: column;
  width: 150px;
`;

const ResultW = styled.div`
  display: grid;
  grid-column-template: repeat(3, 3rem);
  border: 0.1rem solid black;
  border-radius: 5px;
  width: 150px;
`;
/*

function getMin (time) {
    const [hr, min] = time.split(":");
    const hrToMin = Number(hr) * 60;
    const totalMin = hrToMin + Number(min);
    UpMin(totalMin)
},
function calHourPass(inTime, outTime) {
totalTime = outTime - inTime;
    todayHour = totalTime / 60;
    console.log(`Today's hour are ${todayHour}`);
    return todayHour;
}

*/

const Results = props => {
  return (
    <ResultW>
      <div>
        <p>{props.punchIn}</p>
        <p>{props.punchOut}</p>
      </div>
    </ResultW>
  );
};

function DailyHour() {
  const [punchIn, setPunchIn] = useState("08:00");
  const [punchOut, setPunchOut] = useState("16:00");
  //const [hourWork, setHourWork] = useState("") // perform calculation on punchIn and punch out
  // const [dailyHours, addDayHours] = useState("") // add all hours to here, limit array to 6

  return (
    <div>
      <InputModal>
        <button>ADD</button>
      </InputModal>
      <Results punchIn={punchIn} punchOut={punchOut} />
    </div>
  );
}

export default DailyHour;

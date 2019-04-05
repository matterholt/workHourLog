import React, { useState, useEffect } from 'react';
import styled from "@emotion/styled";


const Inputs = styled.div`
  display: grid;
  grid-template-columns¡1: repeat(3, 3rem);
  border: 0.1rem solid black;
  border-radius: 5px;
  grid-template-areas:
  " button, LogIn, LogOut";
`

const ResultW = styled.div`
  display: grid;
  grid-column-template: repeat(3, 3rem);
  border: 0.1rem solid black;
  border-radius: 5px;
`
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










const Results = (props) =>{
    return(
        <ResultW>
         <div>
            <p>{props.punchIn}</p>
            <p>{props.punchOut}</p>
        </div>
        </ResultW>


    )
}


function DailyHour (){
    const [punchIn, setPunchIn] = useState("08:00")
    const [punchOut, setPunchOut] = useState("16:00")
    //const [hourWork, setHourWork] = useState("") // perform calculation on punchIn and punch out
   // const [dailyHours, addDayHours] = useState("") // add all hours to here, limit array to 6

    return(
        <div>
        <Inputs>
            <button>ADD</button>
            <label> Punch In: </label>
            <input
            value = {punchIn} 
            onChange = {e => setPunchIn(e.target.value)}
            type="time"
            />
            <label>Punch Out:</label>
            <input
            value = {punchOut}
            onChange = {e => setPunchOut(e.target.value)}
            type="time"
            />
        </Inputs>
        <Results
        punchIn = {punchIn}
        punchOut = {punchOut}
        />
        </div>

    )
}


export default DailyHour;

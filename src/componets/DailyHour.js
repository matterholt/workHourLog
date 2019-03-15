import React, { useState, useEffect } from 'react';

const Today = (props) =>{
    return(
        <>
            <h2> {props.day} </h2>
        </>
    )
}

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

const ConvertMin = (props) =>{
    const [convrtMin, UpMin] = useState("")
    return(
        <>
        <p>
            If we convert <strong> {(props.time )} </strong>
            and convert to it to min we should have 
            <strong> {convrtMin} </strong>
        </p>
        </>
    )
    
}


const PunchIn = () =>{
    return (
        <>
        <label> Punch In: </label>
        <input
          id="punchIn"
          type="time"
        />
        </>
    )
}

function DailyHour (){
    const [inTime, upInTime] = useState("8:50")
    
    return(
        <div className="dailyLog">
            <Today 
            day = "Monday" />
            <PunchIn
            value={inTime}
            onChange={e => upInTime(e.target.value)}
            />
            <ConvertMin 
            time= {inTime} />
        </div>

    )
}


export default DailyHour;

import React, { useState } from 'react';

const Today = (props) =>{
    return(
        <>
            <h2> {props.day} </h2>
        </>
    )
}

/*

const ConvertMin = (props) =>{
    const [convrtMin, UpMin] = useState("")


*    return(
        <>
        <p>
            If we convert <strong> {(props.time )} </strong>
            and convert to it to min we should have 
            <strong> {convrtMin} </strong>
        </p>
        </>
    )
    
}
*/
const PunchIn = () =>{
    const [inTime, upInTime] = useState("8:50")
    const [convrtMin, UpMin] = useState("")

    const getMin =(e)=>{
        const time = e.target.value
        upInTime(time)
        const [hr, min] = time.split(":");
        const hrToMin = Number(hr) * 60;
        const totalMin = hrToMin + Number(min);
        UpMin(totalMin)
  };

    return(
        <>
        <label> Punch In: </label>
        <input
          id="punchIn"
          type="time"
          value={inTime}
          onChange={e => getMin(e)}
        />
        <h1>{convrtMin} Mins </h1>
        </>
    )
}

function DailyHour (){
    
    return(
        <div className="dailyLog">
            <Today day = "Monday" />
            <PunchIn />
        </div>

    )
}


export default DailyHour;

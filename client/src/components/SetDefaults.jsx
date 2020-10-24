import React, { useState, useEffect } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
const setDefaultContainer = css`
  border: solid white 2px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-flow: column;
  box-shadow: 0px 0px 19px #48515b;
  border-radius: 5px;
`;

const companyRecomendedTime = {
  punchIn: "08:00",
  punchOut: "16:30",
  lunchTime: "12:00",
  hrToEat: 0.5,
};



const useLocalStorage = (
  key,
  standardDefault = companyRecomendedTime,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) => {
  const [defaultTimes, setDefaultTimes] = useState(
    () =>{
      const valueInLocalStorage = window.localStorage.getItem(key)
      if (valueInLocalStorage){deserialize(valueInLocalStorage) }
      return typeof standardDefault === "function"
        ? standardDefault()
        : standardDefault;
  }
  );

  useEffect(() => {
    window.localStorage.setItem(key, serialize(defaultTimes));
  });

  return [defaultTimes, setDefaultTimes];
};


function SetDefaults() {
const [defaultTimes, setDefaultTimes] = useLocalStorage('defaultHrs');

  
  function handleChange(e) {
    // update state on form
    const { name, value } = e.target
    setDefaultTimes({ ...defaultTimes ,[name]:value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("saved it to DB");
  }

  // set the default hours user wishes to start and stop work
  return (
    <div>
      <form css={setDefaultContainer} onSubmit={handleSubmit}>
        <h2>Set Defaults</h2>
        <label htmlFor="defaultTimeIn">Punch In Time</label>
        <input
          id="defaultTimeIn"
          name="punchIn"
          type="time"
          value={defaultTimes.punchIn}
          onChange={handleChange}
        />

        <label htmlFor="defaultTimeOut">Punch Out Time</label>
        <input
          id="defaultTimeOut"
          name="punchOut"
          type="time"
          value={defaultTimes.punchOut}
          onChange={handleChange}
        />
        <label htmlFor="defaultLunchTime">Lunch Time</label>
        <input
          id="defaultLunchTime"
          type="time"
          name="lunchTime"
          value={defaultTimes.lunchTime}
          onChange={handleChange}
        />
        <label default>Hour for Lunch</label>
        <input
          type="number"
          min="0.5"
          step="0.5"
          name="hrToEat"
          id="hrToEat"
          value={defaultTimes.hrToEat}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>

      <div>
        <h3>Evaluation:</h3>
        <ul>
          <li>You will be arriving at {defaultTimes.punchIn}.</li>
          <li>
            You plan on taking {defaultTimes.hrToEat} hrs at{" "}
            {defaultTimes.lunchTime} for lunch
          </li>
          <li>The will be leaving work at {defaultTimes.punchOut}</li>
        </ul>
      </div>
    </div>
  );
}

export default SetDefaults;
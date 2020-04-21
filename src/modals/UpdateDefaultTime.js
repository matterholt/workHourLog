import React, { useState, useContext } from "react";

import ModelLayout from "../components/ModelLayout";
import { DefaultHrContext } from "../context/DefaultHrContext";

export const UpdateDefaultTime = () => {
  const [isModalShown, setIsModalShown] = useState(true);
  const { workingHrs, SetWorkingHrs } = useContext(DefaultHrContext);
  function updateDefaultHrs(e) {
    let newValue = e.target.value;
    let changeTime = e.target.name;
    SetWorkingHrs({ ...workingHrs, [changeTime]: newValue });
  }
  if (isModalShown) {
    return (
      <ModelLayout>
        <h2> Update the default times</h2>
        <label>Change Start Time</label>
        <input
          name="start"
          type="time"
          value={workingHrs.start}
          onChange={(e) => updateDefaultHrs(e)}
        />
        <label>Change Quit Time</label>
        <input
          name="quit"
          type="time"
          value={workingHrs.quit}
          onChange={(e) => updateDefaultHrs(e)}
        />
        <label>Lunch Hour</label>
        <input
          name="lunch"
          type="number"
          value={workingHrs.lunch}
          onChange={(e) => updateDefaultHrs(e)}
        />
        <button>Update</button>
        <button> close </button>
      </ModelLayout>
    );
  } else {
    return <button>Update Defaults</button>;
  }
};

import React, { useState, useContext, useEffect } from "react";

import ModelLayout from "../components/ModelLayout";
import { DefaultHrContext } from "../context/DefaultHrContext";

const DefaultModal = (props) => {
  const { workingHrs, SetWorkingHrs } = useContext(DefaultHrContext);

  const [newStartTime, setNewStartTime] = useState("");
  const [newQuitTime, setNewQuitTime] = useState("");
  const [newLunchHrs, setLunchHrs] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    SetWorkingHrs({
      ...workingHrs,
      start: newStartTime,
      quit: newQuitTime,
      lunch: newLunchHrs,
    });
    props.updateShown();
  }
  useEffect(() => {
    setNewStartTime(workingHrs.start);
    setNewQuitTime(workingHrs.quit);
    setLunchHrs(workingHrs.lunch);
  }, []);

  return (
    <ModelLayout>
      <button onClick={props.updateShown}>close</button>
      <form onSubmit={onSubmit}>
        <h2> Update the default times</h2>
        <label>Change Start Time</label>
        <input
          name="start"
          type="time"
          value={newStartTime}
          onChange={(e) => setNewStartTime(e.target.value)}
        />
        <label>Change Quit Time</label>
        <input
          name="quit"
          type="time"
          value={newQuitTime}
          onChange={(e) => setNewQuitTime(e.target.value)}
        />
        <label>Lunch Hour</label>
        <input
          name="lunch"
          type="number"
          value={newLunchHrs}
          onChange={(e) => setLunchHrs(e.target.value)}
        />
        <button type="submit">OK</button>
      </form>
    </ModelLayout>
  );
};

export const UpdateDefaultTime = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  function isModelOpen() {
    // custom hook !!  learn later!! TODO
    setIsModalShown(!isModalShown);
  }

  return (
    <div>
      {isModalShown ? (
        <DefaultModal updateShown={isModelOpen} />
      ) : (
        <button onClick={isModelOpen}>Update Defaults</button>
      )}
    </div>
  );
};

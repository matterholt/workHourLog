import React, { useState, useContext, useEffect } from "react";

import ModelLayout from "../components/ModelLayout";
import { DefaultHrContext } from "../context/DefaultHrContext";

const ConfirmChoice = (props) => {
  return (
    <div>
      <p>You have decide to change you setting</p>
      <button onClick={props.agreeChange}>Agree</button>
      <button onClick={props.closeModel}>Reject</button>
    </div>
  );
};

const DefaultModal = (props) => {
  const { workingHrs, SetWorkingHrs } = useContext(DefaultHrContext);

  const [newStartTime, setNewStartTime] = useState("");
  const [newQuitTime, setNewQuitTime] = useState("");
  const [newLunchHrs, setLunchHrs] = useState("");

  const [isConfirmModel, setConfirmModel] = useState(false);
  const [confirmNewDefaultTime, setConfirmNewDefaultTime] = useState(false);

  function closeModal() {
    setConfirmModel(false);
  }
  function agreeChange() {
    setConfirmNewDefaultTime(true);
    setConfirmModel(false);
    console.log("Agree to the changes");
    updateGlobalState();
  }

  function confirmDefault() {
    // useReducer to make it simple
    setConfirmModel(true);
    //closer. need to keep function open till confirm
  }

  function updateGlobalState() {
    SetWorkingHrs({
      ...workingHrs,
      start: newStartTime,
      quit: newQuitTime,
      lunch: newLunchHrs,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (confirmNewDefaultTime) {
      updateGlobalState();
    } else {
      confirmDefault();
    }
  }

  useEffect(() => {
    setNewStartTime(workingHrs.start);
    setNewQuitTime(workingHrs.quit);
    setLunchHrs(workingHrs.lunch);
  }, []);

  return (
    <ModelLayout>
      <button onClick={props.updateShown}>close</button>
      {isConfirmModel ? (
        <ConfirmChoice closeModel={closeModal} agreeChange={agreeChange} />
      ) : null}

      <form onSubmit={handleSubmit}>
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

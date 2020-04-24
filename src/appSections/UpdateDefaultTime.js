import React, { useState, useContext, useEffect } from "react";

import ModelLayout from "../components/ModelLayout";
import { DefaultHrContext } from "../context/DefaultHrContext";
import { useIsModalOpen } from "../hooks/useIsModalOpen";

import { Form } from "../components/style/Form";
import { ModalHeader } from "../components/style/ModalHeader";
import { FormContainer } from "../components/style/FormContainer";

const ConfirmChoice = (props) => {
  return (
    <ModelLayout>
      <div
        style={{
          background: "red",
          zIndex: "11",
          width: "550px",
          height: "150px",
        }}
      >
        <p>You have decide to change you setting</p>
        <button onClick={props.agreeChange}>Agree</button>
        <button onClick={props.closeModel}>Reject</button>
      </div>
    </ModelLayout>
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
    // close modal
    props.updateShown();
  }
  function confirmDefault() {
    // useReducer to make it simple
    setConfirmModel(true);
  }

  function updateGlobalState() {
    SetWorkingHrs({
      ...workingHrs,
      start: newStartTime,
      quit: newQuitTime,
      lunch: newLunchHrs,
    });
    setConfirmNewDefaultTime(false);
    closeModal();
  }
  function handleSubmit(event) {
    // handles the form even
    event.preventDefault();
    if (confirmNewDefaultTime) {
      updateGlobalState();
    } else {
      // seems messy and need to have a better structure
      confirmDefault();
    }
  }

  useEffect(() => {
    // if built on larger app would fetch data from API
    setNewStartTime(workingHrs.start);
    setNewQuitTime(workingHrs.quit);
    setLunchHrs(workingHrs.lunch);
  }, []);

  return (
    <ModelLayout>
      <FormContainer>
        <ModalHeader>
          <p>Time Defaults</p>
          {isConfirmModel ? (
            <ConfirmChoice closeModel={closeModal} agreeChange={agreeChange} />
          ) : null}
          <button onClick={props.updateShown}>close</button>
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <h2> Update the default times</h2>
          <ul>
            <li>
              <label>Change Start Time</label>
              <input
                name="start"
                type="time"
                value={newStartTime}
                onChange={(e) => setNewStartTime(e.target.value)}
              />
            </li>
            <li>
              <label>Change Quit Time</label>
              <input
                name="quit"
                type="time"
                value={newQuitTime}
                onChange={(e) => setNewQuitTime(e.target.value)}
              />
            </li>
            <li>
              <label>Lunch Hour</label>
              <input
                name="lunch"
                type="number"
                value={newLunchHrs}
                onChange={(e) => setLunchHrs(e.target.value)}
              />
            </li>
            <li>
              <button type="submit">OK</button>
              <button onClick={props.updateShown}>Cancel</button>
            </li>
          </ul>
        </Form>
      </FormContainer>
    </ModelLayout>
  );
};

export const UpdateDefaultTime = () => {
  const [isModalShown, setTrue, setFalse] = useIsModalOpen(false);

  return (
    <>
      {isModalShown ? (
        <DefaultModal updateShown={setFalse} />
      ) : (
        <button onClick={setTrue}>Update Defaults</button>
      )}
    </>
  );
};

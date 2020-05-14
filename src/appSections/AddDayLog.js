import React from "react";

import ModelLayout from "../components/ModelLayout";

// Custom Hooks
import { useIsModalOpen } from "../hooks/useIsModalOpen";

// Nested tag, Styled Components
import { Form } from "../components/style/Form";
import { ModalHeader } from "../components/style/ModalHeader";
import { FormContainer } from "../components/style/FormContainer";
import { ActionButton } from "../components/style/ActionButton";

const NewDayForm = () => {
  function handSubmit(event) {
    //action="" method="POST"
    event.preventDefault();
    console.log("send to the backend");
  }
  // lets make it a good form
  return (
    <Form onSubmit={handSubmit}>
      <h1> Task</h1>
      <p>Task to get done</p>
      <ul>
        <li>
          <label htmlFor="dateSelect">Select Day:</label>
          <input id="dateSelect" name="dateSelect" type="date" />
        </li>
        <li>
          <label htmlFor="startTime">Start Time:</label>
          <input id="startTime" name="startTime" type="time" />

          <label htmlFor="quitTime">End Time:</label>
          <input id="quitTime" name="quitTime" type="time" />
        </li>

        <li>
          <button type="submit">Submit</button>
          <button type="reset">Cancel</button>
        </li>
      </ul>
    </Form>
  );
};

const AddTaskModal = (props) => {
  return (
    <ModelLayout>
      <FormContainer>
        <ModalHeader>
          <p>Add Task</p>
          <button onClick={props.updateShown}>close</button>
        </ModalHeader>
        <NewDayForm />
      </FormContainer>
    </ModelLayout>
  );
};

export const AddDayLog = () => {
  const [isModalShown, setTrue, setFalse] = useIsModalOpen(false);

  return (
    <>
      {isModalShown ? (
        <AddTaskModal updateShown={setFalse} />
      ) : (
        <ActionButton onClick={setTrue}>Add Hour</ActionButton>
      )}
    </>
  );
};

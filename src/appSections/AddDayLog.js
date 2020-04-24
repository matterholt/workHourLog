import React, { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import ModelLayout from "../components/ModelLayout";

import { useIsModalOpen } from "../hooks/useIsModalOpen";
import { Form } from "../components/style/Form";
import { ModalHeader } from "../components/style/ModalHeader";
import { FormContainer } from "../components/style/FormContainer";

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
        </li>
        <li>
          <label htmlFor="quitTime">End Time:</label>
          <input id="quitTime" name="quitTime" type="time" />
        </li>
        <li>
          <label htmlFor="taskNote">Description:</label>
          <textArea textarea id="taskNote" name="taskNote" />
        </li>
        <li row>
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
  const [isModalShown, setTrue, setFalse] = useIsModalOpen(true);

  return (
    <>
      {isModalShown ? (
        <AddTaskModal updateShown={setFalse} />
      ) : (
        <button onClick={setTrue}>Add Hour</button>
      )}
    </>
  );
};

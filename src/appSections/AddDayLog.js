import React, { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import ModelLayout from "../components/ModelLayout";

import { useIsModalOpen } from "../hooks/useIsModalOpen";

const NewDayDiv = styled.div`
  background: #7c7c86;
  padding: 2px;
`;

const NewDayForm = () => {
  function handSubmit(event) {
    //action="" method="POST"
    event.preventDefault();
    console.log("send to the backend");
  }
  // lets make it a good form
  return (
    <form onSubmit={handSubmit}>
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
          <label htmlFor="quitTime">Quit Time:</label>
          <input id="quitTime" name="quitTime" type="time" />
        </li>
        <li>
          <label htmlFor="taskNote">Description:</label>
          <textarea id="taskNote" name="taskNote" />
        </li>
        <li class="button">
          <button type="submit">Submit</button>
        </li>
      </ul>
    </form>
  );
};

const AddTaskModal = (props) => {
  return (
    <ModelLayout>
      <NewDayDiv>
        <h1> add your hours</h1>
        <NewDayForm />
        <button onClick={props.updateShown}>close</button>
      </NewDayDiv>
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

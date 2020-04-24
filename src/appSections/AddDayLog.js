import React, { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import ModelLayout from "../components/ModelLayout";

import { useIsModalOpen } from "../hooks/useIsModalOpen";

const NewDayDiv = styled.div`
  background: #7c7c86;
  border-radius: 0.3em;
  overflow: hidden;
`;

/// building Form style!
const Form = styled.form`
  margin: 10px;
  max-width: 400px;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: inherit;
  background-color: white;
`;

const Form_ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Form_li = styled.li`
  margin-top: 1em;
  display: flex;
  flex-flow: ${(props) => (props.row ? "row" : "column")};
`;

const Form_label = styled.label`
  display: inline-block;
  width: 90px;
  margin-bottom: 0.2em;
  font-weight: 900;
`;

const Form_input = styled.input`
  font: 1em sans-serif;
  width: 300px;
  box-sizing: border-box;
  border: 1px solid #999;
  height: ${(props) => (props.textarea ? "5em" : null)};
  vertical-align: ${(props) => (props.textarea ? "top" : null)}
  
  &:focus {
    border-color: #000;
  }
`;

const Form_textArea = Form_input.withComponent("textarea");

const Form_button = styled.button`
  margin: 0 10px;
`;

const Form_heading = styled.h1`
  margin: 0;
  text-align: center;
`;

const Form_text = styled.p`
  margin: 1em 0 0 0;
  text-align: center;
`;
////
const NewDayForm = () => {
  function handSubmit(event) {
    //action="" method="POST"
    event.preventDefault();
    console.log("send to the backend");
  }
  // lets make it a good form
  return (
    <Form onSubmit={handSubmit}>
      <Form_heading> Task</Form_heading>
      <Form_text>Task to get done</Form_text>
      <Form_ul>
        <Form_li>
          <Form_label htmlFor="dateSelect">Select Day:</Form_label>
          <Form_input id="dateSelect" name="dateSelect" type="date" />
        </Form_li>
        <Form_li>
          <Form_label htmlFor="startTime">Start Time:</Form_label>
          <Form_input id="startTime" name="startTime" type="time" />
        </Form_li>
        <Form_li>
          <Form_label htmlFor="quitTime">End Time:</Form_label>
          <Form_input id="quitTime" name="quitTime" type="time" />
        </Form_li>
        <Form_li>
          <Form_label htmlFor="taskNote">Description:</Form_label>
          <Form_textArea textarea id="taskNote" name="taskNote" />
        </Form_li>
        <Form_li row>
          <Form_button type="submit">Submit</Form_button>
          <Form_button type="reset">Reset</Form_button>
        </Form_li>
      </Form_ul>
    </Form>
  );
};

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  background-color: #4b4b51;
  color: white;
  align-items: center;
  padding: 0 12px;
`;

const AddTaskModal = (props) => {
  return (
    <ModelLayout>
      <NewDayDiv>
        <ModalHeader>
          <p>Add Task</p>
          <button onClick={props.updateShown}>close</button>
        </ModalHeader>
        <NewDayForm />
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

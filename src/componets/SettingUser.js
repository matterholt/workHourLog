import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import styled from "@emotion/styled";

const Settings = styled.div`
  display: flex;
  flex-flow: column;
`;

const SettingForm = ({ setSettings, userPref, modalView }) => {
  return (
    <Modal>
      <ModalHeader title=" User Settings" toggle={modalView} />
      <Settings>
        <h2>hello {userPref.userName}</h2>
        <label>
          Name:
          <input
            type="text"
            name="username"
            value={userPref.username}
            onChange={setSettings}
          />
        </label>
        <label>
          Start Time:
          <input
            type="time"
            name="startTime"
            value={userPref.startTime}
            onChange={setSettings}
          />
        </label>
        <label>
          Leave Time:
          <input
            type="time"
            name="endTime"
            value={userPref.endTime}
            onChange={setSettings}
          />
        </label>
        <label>
          Lunch:
          <input
            type="number"
            name="lunchTime"
            value={userPref.lunchTime}
            onChange={setSettings}
          />
        </label>
      </Settings>
      <button onClick={modalView}>Approve</button>
    </Modal>
  );
};

function UserSettings(props) {
  const { setSettings, userPref, modalView } = props;

  if (modalView === true) {
    return (
      <SettingForm
        setSettings={setSettings}
        userPref={userPref}
        modalView={modalView}
      />
    );
  } else {
    return <h2>nope</h2>;
  }
}

export default UserSettings;

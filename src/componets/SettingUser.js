import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";
import styled from "@emotion/styled";

const Settings = styled.div`
  display: flex;
  flex-flow: column;
`;
const temp = {
  background: "gray"
};

function UserSettings({ setSettings, userPref, toggle }) {
  return (
    <Modal>
      <ModalHeader title=" User Settings" toggle={toggle} />
      <Settings>
        <h2>hello {userPref.userName}</h2>
        <label>
          Name:
          <input
            style={temp}
            type="text"
            name="username"
            value={userPref.username}
            onChange={setSettings}
          />
        </label>
        <label>
          Start Time:
          <input
            style={temp}
            type="time"
            name="startTime"
            value={userPref.startTime}
            onChange={setSettings}
          />
        </label>
        <label>
          Leave Time:
          <input
            style={temp}
            type="time"
            name="endTime"
            value={userPref.endTime}
            onChange={setSettings}
          />
        </label>
        <label>
          Lunch:
          <input
            style={temp}
            type="number"
            name="lunchTime"
            value={userPref.lunchTime}
            onChange={setSettings}
          />
        </label>
      </Settings>
      <button onClick={toggle}>Approve</button>
    </Modal>
  );
}

export default UserSettings;

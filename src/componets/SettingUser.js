import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import ModalHeader from "./ModalHeader";

const temp = {
  background: "gray"
};

function UserSettings(props) {
  const [userProfile, setUserProfile] = useState({
    userName: "",
    startTime: "",
    endTime: "",
    lunchTime: ""
  });
  function setSettings(e) {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value
    });
  }
  function approveSettings() {
    props.updateSettings({ userProfile });
  }
  useEffect(() => {
    console.log(props.userPref);
    setUserProfile(props.userPref);
  }, []);

  return (
    <Modal>
      <ModalHeader title=" User Settings" toggle={props.toggle} />
      <div>
        <h2>hello {userProfile.userName}</h2>
        <label>
          Name:
          <input
            style={temp}
            type="text"
            name="userName"
            value={userProfile.userName}
            onChange={e => setSettings(e)}
          />
        </label>
      </div>
      <button onClick={approveSettings}>Approve</button>
    </Modal>
  );
}

export default UserSettings;

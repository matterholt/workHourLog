import React from "react";
import styled from "@emotion/styled";
import SettingUser from "./componets/SettingUser";

const SideNav = styled.nav`
  display: flex;
  flex-flow: column;
  align-content: center;
  background-color: white;
  padding: 25px;
  grid-column: 1;
  grid-row: 2/3;
`;
functin Nav(props){
    const {toggle,}
    return (
        

              <SideNav>
        {inputModal ? (
          <>
            <AddHour toggle={toggleSwitch} />
            <AddNewHours toggle={toggleSwitch} />
          </>
        ) : (
          <AddNewHours toggle={toggleSwitch} />
        )}

        {settingModal ? (
          <SettingUser
            toggle={toggleSwitch2}
            setSettings={setSettings}
            userPref={userSettings}
          />
        ) : (
          <ChangeSettings toggle={toggleSwitch2} />
        )}
      </SideNav>

    )
}
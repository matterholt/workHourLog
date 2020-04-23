import React from "react";
import { UpdateDefaultTime } from "../appSections/UpdateDefaultTime";
import { AddDayLog } from "../appSections/AddDayLog";

import { TaskDiv } from "./style/TaskDiv";

export const TaskBar = () => {
  return (
    <TaskDiv>
      <UpdateDefaultTime />
      <AddDayLog />
    </TaskDiv>
  );
};

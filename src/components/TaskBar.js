import React from "react";
import { UpdateDefaultTime } from "../appSections/UpdateDefaultTime";
import { AddDayLog } from "../appSections/AddDayLog";
import { GenerateWeekHr } from "../components/GenerateWeekHrs";

import { TaskDiv } from "./style/TaskDiv";

export const TaskBar = () => {
  return (
    <TaskDiv>
      <GenerateWeekHr />
      <AddDayLog />
      <UpdateDefaultTime />
    </TaskDiv>
  );
};

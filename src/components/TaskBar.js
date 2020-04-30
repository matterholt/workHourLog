import React from "react";
import { UpdateDefaultTime } from "../appSections/UpdateDefaultTime";
import { AddDayLog } from "../appSections/AddDayLog";
import { GenerateWeekHr } from "../components/GenerateWeekHrs";
import { ClearWeekHr } from "../components/ClearWeekHrs";

import { TaskDiv } from "./style/TaskDiv";

export const TaskBar = () => {
  return (
    <TaskDiv>
      <GenerateWeekHr />
      <ClearWeekHr />
      <AddDayLog />
      <UpdateDefaultTime />
    </TaskDiv>
  );
};

import React from "react";
import { UpdateDefaultTime } from "../appSections/UpdateDefaultTime";
import { AddDayLog } from "../appSections/AddDayLog";
import { GernateWeekHr } from "../components/GenerateWeekHrs";

import { TaskDiv } from "./style/TaskDiv";

export const TaskBar = () => {
  return (
    <TaskDiv>
      <GernateWeekHr />
      <UpdateDefaultTime />
      <AddDayLog />
    </TaskDiv>
  );
};

import { Grid } from "@material-ui/core";
import Controls from "../../controls/Controls";

import React, { useState, useEffect } from "react";
import { useForm, Form } from "../../useForm";
import * as Assignes from "../../assignes/Assignes";


const taskStatus = [
  { id: "To-Do", title: "To-Do" },
  { id: "Done", title: "Done" },
  { id: "InProgress", title: "InProgress" },
];
const initialFvalues = {
  id: 0,
  taskName: "",
  priority: "P0",
  assigne: "",
  storyPoints: "",
  statusOfTask: "ToDo",
};
export default function EmployeesForm() {
  const { values, setValues, handleInputChange } = useForm(initialFvalues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name="taskName"
            label="Task Name"
            value={values.taskName}
            onChange={handleInputChange}
          ></Controls.Input>
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name="statusOfTask"
            label="Status"
            value={values.statusOfTask}
            onChange={handleInputChange}
            items={taskStatus}
          ></Controls.RadioGroup>
          <Controls.Select
            name="assigne"
            label="Assigne"
            value={values.assigne}
            onChange={handleInputChange}
            options={Assignes.getAssignes()}
          ></Controls.Select>
          <Controls.Select
            name="priority"
            label="Priority"
            value={values.priority}
            onChange={handleInputChange}
            options={Assignes.getPriority()}
          ></Controls.Select>
        </Grid>
      </Grid>
    </Form>
  );
}

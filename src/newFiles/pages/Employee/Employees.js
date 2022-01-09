import { Paper } from "@mui/material";
import { padding } from "@mui/system";
import React from "react";
import EmployeesForm from "./EmployeesForm";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(8),
    padding: theme.spacing(3),
  },
}));
export default function Employees() {

    const classes=useStyles();
  return (
    <>
      <Paper className={classes.pageContent}>
        <EmployeesForm></EmployeesForm>
      </Paper>
    </>
  );
}

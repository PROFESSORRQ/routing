import React from "react";
import "../App.css"; 
import ToDoList from "./ToDoList";
//import createTask from "../modals/CreateTask";
function Board(props) {
  return (
    <div>
      <ToDoList
        taskList={props.taskList}
        taskInProgressList={props.taskInProgressList}
        taskDoneList={props.taskDoneList}
        setTaskList={props.setTaskList}
        setTaskInProgressList={props.setTaskInProgressList}
        setTaskDoneList={props.setTaskDoneList}
      ></ToDoList>
    </div>
  );
}

export default Board;

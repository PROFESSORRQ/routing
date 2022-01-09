import React, { useState, useEffect } from "react";
import CreateTask from "../modals/CreateTask";
const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    setTaskList(tempList);
    setModal(false);
  };
  return (
    <>
      <div className="header text-center">
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <div className="task-container">
        {taskList.map((obj) => (
          <li>
            {obj.Name}    {obj.Assigne}   {obj.Priority}    {obj.Time}    {obj.status}
          </li>
        ))}
      </div>

      <CreateTask toggle={toggle} modal={modal} save={saveTask}></CreateTask>
    </>
  );
};

export default ToDoList;

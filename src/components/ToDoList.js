import React, { useState, useEffect } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload()
  };
  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    // We cannot store directlt array to our local storage we gave to pass JSON string
    localStorage.setItem("taskList", JSON.stringify(tempList));
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
        {taskList.map((obj, index) => (
          <Card taskObj={obj} index={index} deleteTask={deleteTask} />
        ))}
      </div>

      <CreateTask toggle={toggle} modal={modal} save={saveTask}></CreateTask>
    </>
  );
};

export default ToDoList;

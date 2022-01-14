import React, { useState, useEffect } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

const ToDoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAssigne, setSearchAssigne] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

  useEffect(() => {
    if (searchTerm !== "") {
      const newTaskList = taskList.filter((tasklist) => {
        return Object.values(tasklist)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newTaskList);
    } else {
      setSearchResults(taskList);
    }
  }, [searchTerm]);

  const searchHandlerTask = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };
  const searchHandlerAssigne = (e) => {
    const { value } = e.target;
    setSearchAssigne(value);
  };

  const deleteTask = (index) => {
    let tempList = taskList;

    let tempVal = taskList[index];
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    let arr = localStorage.getItem("deleteList");
    if (arr) {
      let obj = JSON.parse(arr);
      obj.push(tempVal);
      localStorage.setItem("deleteList", JSON.stringify(obj));
    } else {
      let obj = [tempVal];
      localStorage.setItem("deleteList", JSON.stringify(obj));
    }
    window.location.reload();
  };

  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList([...tempList]);
    // window.location.reload();
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
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="searchTaskName"
            value={searchTerm}
            placeholder="Search Taskname"
            onChange={searchHandlerTask}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="searchTaskAssigne"
            value={searchAssigne}
            placeholder="Search TaskAssigne"
            onChange={searchHandlerAssigne}
          />
        </div>
        <div className="form-group">
          <select className="form-control form-select">
            <option selected>Select Status</option>
            <option value="To-Do">To-Do</option>
            <option value="InProgress">InProgress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <button
          className="button btn btn-primary mt-2"
          onClick={() => setModal(true)}
        >
          Create Task
        </button>
      </div>

      <div className="task-container">
        {searchTerm.length == 0
          ? taskList.map((obj, index) => (
              <Card
                taskObj={obj}
                index={index}
                deleteTask={deleteTask}
                updateListArray={updateListArray}
              />
            ))
          : searchResults.map((obj, index) => (
              <Card
                taskObj={obj}
                index={index}
                deleteTask={deleteTask}
                updateListArray={updateListArray}
              />
            ))}
      </div>

      <CreateTask toggle={toggle} modal={modal} save={saveTask}></CreateTask>
    </>
  );
};

export default ToDoList;

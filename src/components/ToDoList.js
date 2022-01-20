import React, { useState, useEffect } from "react";
import { Droppable } from "react-beautiful-dnd";
import { render } from "react-dom";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

const ToDoList = (props) => {
  const [modal, setModal] = useState(false);
  // const [taskList, setTaskList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchAssigne, setSearchAssigne] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchInProgressResults, setSearchInprogressResults] = useState([]);
  const [searchDoneResults, setSearchDoneResults] = useState([]);

  useEffect(() => {
    let arr1 = localStorage.getItem("taskList");
    let arr2 = localStorage.getItem("taskInProgressList");
    let arr3 = localStorage.getItem("taskDoneList");

    if (arr1) {
      let obj1 = JSON.parse(arr1);
      props.setTaskList(obj1);
    }

    if (arr2) {
      let obj2 = JSON.parse(arr2);
      props.setTaskInProgressList(obj2);
    }
    if (arr3) {
      let obj3 = JSON.parse(arr3);
      props.setTaskDoneList(obj3);
    }
  }, []);

  useEffect(() => {
    if (searchTerm !== "" || searchAssigne !== "") {
      const newTaskList = props.taskList.filter((tasks) => {
        if (searchTerm !== "" && searchAssigne === "") {
          return tasks.Name.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchTerm === "" && searchAssigne !== "") {
          return tasks.Assigne.toLowerCase().includes(
            searchAssigne.toLowerCase()
          );
        } else {
          return (
            tasks.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            tasks.Assigne.toLowerCase().includes(searchAssigne.toLowerCase())
          );
        }
      });

      setSearchResults(newTaskList);
      const newInProgressTaskList = props.taskInProgressList.filter((tasks) => {
        if (searchTerm !== "" && searchAssigne === "") {
          return tasks.Name.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchTerm === "" && searchAssigne !== "") {
          return tasks.Assigne.toLowerCase().includes(
            searchAssigne.toLowerCase()
          );
        } else {
          return (
            tasks.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            tasks.Assigne.toLowerCase().includes(searchAssigne.toLowerCase())
          );
        }
      });

      setSearchInprogressResults(newInProgressTaskList);
      const newDoneTaskList = props.taskDoneList.filter((tasks) => {
        if (searchTerm !== "" && searchAssigne === "") {
          return tasks.Name.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchTerm === "" && searchAssigne !== "") {
          return tasks.Assigne.toLowerCase().includes(
            searchAssigne.toLowerCase()
          );
        } else {
          return (
            tasks.Name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            tasks.Assigne.toLowerCase().includes(searchAssigne.toLowerCase())
          );
        }
      });

      setSearchDoneResults(newDoneTaskList);
    } else {
      setSearchResults(props.taskList);
      setSearchInprogressResults(props.taskInProgressList);
      setSearchDoneResults(props.taskDoneList);
    }
  }, [searchTerm, searchAssigne]);

  const searchHandlerTask = (e) => {
    setSearchTerm(e.target.value);
  };
  const searchHandlerAssigne = (e) => {
    setSearchAssigne(e.target.value);
  };

  const deleteTask = (index, status) => {
    console.log(status)
    if (status === "To-Do") {
      let tempList = props.taskList;

      let tempVal = props.taskList[index];
      tempList.splice(index, 1);
      localStorage.setItem("taskList", JSON.stringify(tempList));
      props.setTaskList(tempList);
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
    } else if (status === "InProgress") {
      let tempList = props.taskInProgressList;

      let tempVal = props.taskInProgressList[index];
      tempList.splice(index, 1);
      localStorage.setItem("taskInProgressList", JSON.stringify(tempList));
      props.setTaskInProgressList(tempList);
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
    }else{
      let tempList = props.taskDoneList;

      let tempVal = props.taskDoneList[index];
      tempList.splice(index, 1);
      localStorage.setItem("taskList", JSON.stringify(tempList));
      props.setTaskDoneList(tempList);
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
    }
  };

  const updateListArray = (obj, index) => {
    let tempList = props.taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    props.setTaskList([...tempList]);
    // window.location.reload();
  };
  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = props.taskList;
    tempList.push(taskObj);
    // We cannot store directlt array to our local storage we gave to pass JSON string
    localStorage.setItem("taskList", JSON.stringify(tempList));
    props.setTaskList(tempList);
    setModal(false);
  };

  // return(
  // <div>

  // </div>
  //
  //)
  return (
    <>
      <div className="header">
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
          <select
            className="form-select form-control"
            value={searchAssigne}
            onChange={searchHandlerAssigne}
            name="taskAssigne"
            id="assigne"
          >
            <option value="">Select Assigne</option>
            <option value="Sam">Sam</option>
            <option value="Ansh">Ansh</option>
            <option value="Rohit">Rohit</option>
            <option value="Harsh">Harsh</option>
          </select>
        </div>
        <button
          className="button btn btn-primary mt-3"
          onClick={() => setModal(true)}
        >
          Create Task
        </button>
      </div>
      <div className="container">
        <Droppable droppableId="ToDoList">
          {(provided, snapshot) => (
            <div
              className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="todos__heading">To-Do</span>
              {searchAssigne.length === 0 && searchTerm.length === 0
                ? props.taskList.map((obj, index) => (
                    <Card
                      key={obj.id}
                      taskObj={obj}
                      index={index}
                      deleteTask={deleteTask}
                      updateListArray={updateListArray}
                    />
                  ))
                : searchResults.map((obj, index) => (
                    <Card
                      key={obj.id}
                      taskObj={obj}
                      index={index}
                      deleteTask={deleteTask}
                      updateListArray={updateListArray}
                    />
                  ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="InPogressList">
          {(provided, snapshot) => (
            <div
              className={`todos remove ${
                snapshot.isDraggingOver ? "dragactive" : ""
              }`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="todos__heading">InProgress</span>
              {searchAssigne.length === 0 && searchTerm.length === 0
                ? props.taskInProgressList.map((obj, index) => (
                    <Card
                      key={obj.id}
                      taskObj={obj}
                      index={index}
                      deleteTask={deleteTask}
                      updateListArray={updateListArray}
                    />
                  ))
                : searchInProgressResults.map((obj, index) => (
                    <Card
                      key={obj.id}
                      taskObj={obj}
                      index={index}
                      deleteTask={deleteTask}
                      updateListArray={updateListArray}
                    />
                  ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="DoneList">
          {(provided, snapshot) => (
            <div
              className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <span className="todos__heading">Done</span>
              {searchAssigne.length === 0 && searchTerm.length === 0
                ? props.taskDoneList.map((obj, index) => (
                    <Card
                      key={obj.id}
                      taskObj={obj}
                      index={index}
                      deleteTask={deleteTask}
                      updateListArray={updateListArray}
                    />
                  ))
                : searchDoneResults.map((obj, index) => (
                    <Card
                      key={obj.id}
                      taskObj={obj}
                      index={index}
                      deleteTask={deleteTask}
                      updateListArray={updateListArray}
                    />
                  ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask}></CreateTask>
    </>
  );
};

export default ToDoList;

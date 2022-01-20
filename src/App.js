import React, { useState } from "react";
import "./App.css";
// import "./Styles.css";
import Nav from "./Nav";
import DeletedTask from "./components/DeletedTask";
import Board from "./components/Board";
import "./";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { DragDropContext } from "react-beautiful-dnd";
//BrowserRouter -- to add the ability to handle routing in react
//Route -- It renders out the component based on the URL

function App() {
  const [taskList, setTaskList] = useState([]);
  const [taskInProgressList, setTaskInProgressList] = useState([]);
  const [taskDoneList, setTaskDoneList] = useState([]);
  const onDragEnd = (result) => {
    console.log(result)
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

    let add,
      active = taskList,
      inprogress = taskInProgressList,
      completed = taskDoneList;
    if (source.droppableId === "ToDoList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else if (source.droppableId === "InPogressList") {
      add = inprogress[source.index];
      inprogress.splice(source.index, 1);
    } else {
      add = completed[source.index];
      completed.splice(source.index, 1);
    }
    if (destination.droppableId === "ToDoList") {
      add.status="To-Do"
      active.splice(destination.index, 0, add);

    } else if (destination.droppableId === "InPogressList") {
      add.status = "InProgress";
      inprogress.splice(destination.index, 0, add);
      // console.log(destination)
      // console.log(taskList[destination.index]);
      // console.log(add)
    } else {
      add.status = "Done";
      completed.splice(destination.index, 0, add);
    }
    localStorage.setItem("taskList", JSON.stringify(active));
    setTaskList(active);
    localStorage.setItem("taskInProgressList", JSON.stringify(inprogress));
    setTaskInProgressList(inprogress);
    localStorage.setItem("taskDoneList", JSON.stringify(completed));
    setTaskDoneList(completed);
  };
  return (
    // Things which are inside this router tag have the ability to use routing
    <DragDropContext onDragEnd={onDragEnd}>
      <Router>
        <div className="App">
          <Nav></Nav>
          <Routes>
            <Route
              path="/"
              element={
                <Board
                  taskList={taskList}
                  taskInProgressList={taskInProgressList}
                  taskDoneList={taskDoneList}
                  setTaskList={setTaskList}
                  setTaskInProgressList={setTaskInProgressList}
                  setTaskDoneList={setTaskDoneList}
                />
              }
            />
            <Route path="/deletedTask" element={<DeletedTask />} />
          </Routes>
        </div>
      </Router>
    </DragDropContext>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const CreateTask = ({ modal, toggle,save }) => {
  const [taskName, setTaskName] = useState("");
  const [taskAssigne, setTaskAssigne] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskTime, setTaskTime] = useState("2022-01-01T19:30");
  const [taskStatus, setTaskStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if(name==="taskName"){
setTaskName(value)
    }else if (name === "taskPriority") {
      setTaskPriority(value);
    } else if (name === "taskTime") {
      setTaskTime(value);
    } else if (name === "taskAssigne") {
      setTaskAssigne(value);
    } else {
      setTaskStatus(value);
    }
  };

  const handleSave=()=>{
    let taskObj={}
    taskObj["Name"]=taskName
    taskObj["Assigne"] = taskAssigne;
    taskObj["Priority"] = taskPriority;
    taskObj["Time"] = taskTime;
    taskObj["status"] = taskStatus;
    save(taskObj)
  }
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form action="">
            <div className="form-group">
              <labek>Task Name</labek>
              <input
                type="text"
                name="taskName"
                className="form-control"
                value={taskName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label for="taskPriority">Priority</label>
              <br></br>
              <select
                value={taskPriority}
                onChange={handleChange}
                name="taskPriority"
                id="priority"
              >
                <option value="">--Please Give Priority--</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
                <option value="P4">P4</option>
                <option value="P5">P5</option>
              </select>
            </div>
            <div>
              <label for="taskAssigne">Assigne</label>
              <br></br>
              <select
                value={taskAssigne}
                onChange={handleChange}
                name="taskAssigne"
                id="assigne"
              >
                <option value="">--To Whom--</option>
                <option value="Sam">Sam</option>
                <option value="Ansh">Ansh</option>
                <option value="Rohit">Rohit</option>
                <option value="Harsh">Harsh</option>
              </select>
            </div>
            <div>
              <label for="taskStatus">StatusOfTask</label>
              <br></br>
              <select
                value={taskStatus}
                onChange={handleChange}
                name="taskStatus"
                id="taskStatus"
              >
                <option value="">--Status--</option>
                <option value="To-Do">To-Do</option>
                <option value="InProgress">InProgress</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div>
              <label className="labelstorypoints" for="story-points">
                When will the task be completed:
              </label>

              <input
                value={taskTime}
                onChange={handleChange}
                className="inputstorypoints"
                type="datetime-local"
                id="story-points"
                name="taskTime"
                min="2022-01-01T00:00"
                max="2024-01-01T00:00"
              ></input>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTask;

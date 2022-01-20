import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { v4 as uuidv4 } from "uuid";
const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [taskAssigne, setTaskAssigne] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [taskTime, setTaskTime] = useState("2022-01-01T19:30");
  const [taskStatus, setTaskStatus] = useState("To-Do");
  // const [taskID, setTaskID] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "taskPriority") {
      setTaskPriority(value);
    } else if (name === "taskTime") {
      setTaskTime(value);
    } else {
      setTaskAssigne(value);
    }
  };

  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Assigne"] = taskAssigne;
    taskObj["Priority"] = taskPriority;
    taskObj["Time"] = taskTime;
    taskObj["status"] = taskStatus;
    // setTaskID((parseInt(taskID)+1).toString());
    taskObj["id"] = uuidv4();
    save(taskObj);
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
        <ModalBody>
          <form action="">
            <div className="form-group">
              <input
                type="text"
                name="taskName"
                className="form-control"
                value={taskName}
                onChange={handleChange}
                placeholder="TaskName"
              />
            </div>
            <div className="form-group">
              <select
                className="form-select form-control"
                value={taskPriority}
                onChange={handleChange}
                name="taskPriority"
                id="priority"
              >
                <option value="">Select Priority</option>
                <option value="P0">P0</option>
                <option value="P1">P1</option>
                <option value="P2">P2</option>
                <option value="P3">P3</option>
                <option value="P4">P4</option>
                <option value="P5">P5</option>
              </select>
            </div>
            <div className="form-group">
              <select
                className="form-select form-control"
                value={taskAssigne}
                onChange={handleChange}
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
            <div className="form-group">
              <input
                value={taskTime}
                onChange={handleChange}
                className=" form-control"
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

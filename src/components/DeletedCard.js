import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import DeleteTask from "../modals/DeleteTask";
import EditTask from "../modals/EditTask";

const DeletedCard = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const toggleDelete = () => {
    setModalDelete(!modalDelete);
  };
  const toggleUpdate = () => {
    setModalUpdate(!modalUpdate);
  };
  const updateTask = (obj) => {
    updateListArray(obj, index);
  };
  return (
    <>
      <div className="card-wrapper">
        <div
          className="card-top"
          style={{ backgroundColor: colors[index % 5].primaryColor }}
        ></div>
        <div className="task-holder">
          <span
            className="card-header"
            style={{
              backgroundColor: colors[index % 5].secondaryColor,
              borderRadius: "10px",
            }}
          >
            {taskObj.Name}
          </span>
          <p className="mt-2">
            <b>Assigne: </b>
            {taskObj.Assigne}
          </p>
          <p>
            <b>Priority: </b>
            {taskObj.Priority}
          </p>
          <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
            <i
              className="far fa-edit"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={() => setModalUpdate(true)}
            ></i>
            <i
              className="fas fa-trash-alt"
              style={{
                color: colors[index % 5].primaryColor,
                cursor: "pointer",
              }}
              onClick={() => setModalDelete(true)}
            ></i>
          </div>
        </div>
      </div>

      <EditTask
        toggle={toggleUpdate}
        modal={modalUpdate}
        updateTask={updateTask}
        taskObj={taskObj}
      ></EditTask>
      <DeleteTask
        toggle={toggleDelete}
        modal={modalDelete}
        index={index}
        deletetask={deleteTask}
        taskObj={taskObj}
      ></DeleteTask>
    </>
  );
};
export default DeletedCard;

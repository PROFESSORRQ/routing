import React from "react";
import { Button, Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
const DeleteTask = ({ modal, toggle,index,deletetask,taskObj}) => {
  const handleDelete = () => {
    deletetask(index,taskObj.status);
  };
    return (
      <>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Delete Task</ModalHeader>
          <ModalBody>
              <p>Are you sure you want to delete your task?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={handleDelete}>
              Delete
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

      </>
    );
};

export default DeleteTask;

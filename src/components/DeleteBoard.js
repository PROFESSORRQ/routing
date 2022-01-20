import React, { useState, useEffect } from "react";
import DeletedCard from "./DeletedCard";
const DeletedTaskBoard = () => {
  const [deleteList, setDeleteList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("deleteList");

    if (arr) {
      let obj = JSON.parse(arr);
      setDeleteList(obj);
    }
  }, []);
  return (
    <div>
      {deleteList.map((obj, index) => (
        <DeletedCard taskObj={obj} index={index} />
      ))}
    </div>
  );
};

export default DeletedTaskBoard;

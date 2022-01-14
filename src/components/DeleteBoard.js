import React,{useState,useEffect} from "react";
import Card from "./Card";
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
        
           <Card
             taskObj={obj}
             index={index}
           /> 
      
      ))}
    </div>
  );
};

export default DeletedTaskBoard;

import React from "react";
import "./App.css"
const ToDoLists = (props) => {


  return (
    <>
      <div className="todo">
        <i onClick={()=>{
            props.onSelect(props.id)
        }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjchk8me8keL39x4tLxxVsCZR0AC7dInk5rg&usqp=CAU" height="20px" width="20px"
        /></i>
       <li className="li1"> {props.text}</li>
      </div>
    </>
  );
};
export default ToDoLists;

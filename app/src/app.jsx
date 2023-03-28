
import "./App.css"

import React, { useState } from "react";
import ToDoLists from "./ToDoList";
const App = () => {
  const [inputlist, setinputlist] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setinputlist(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputlist];
    });
    setinputlist("");
  };
  const deleteItems=(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !==id;
      })
    })

  }
  return (
    <>
      <div  className="maindiv">
        <div className="subdiv">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add Items"
            value={inputlist}
            onChange={itemEvent}
          />
          <button onClick={listOfItems} className="btn"> + </button>

          <ul>
            {/* <li> {inputlist}</li> */}
            {Items.map((itemval, index) => {
              return <ToDoLists key={index} id={index} text={itemval} onSelect={deleteItems}/>;
            })}
          </ul>
        </div>
      </div>
      
      
      
      
    </>
  );
};
export default App;

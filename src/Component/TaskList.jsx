import { useState } from "react";
import './task.css';
function TaskList({onAdd}) {
    const [task,setTask]=useState("");
    const handleAdd = () => {
        onAdd(task);
        setTask("");
      };
    return (
      <>
      <div className='list'>
        <h1>To-Do List</h1>
        <div className='list-insert'>
        <input type="text" placeholder='enter your task' value={task} 
        onChange={(e)=> setTask(e.target.value)} />
        
        <button onClick={handleAdd}
        style={{backgroundColor:' green' , marginRight:'5px', color:'white'}}>ADD</button>
  
          </div>
        
       </div>
  
        
        
      </>
    )
  }
  
  export default TaskList
  

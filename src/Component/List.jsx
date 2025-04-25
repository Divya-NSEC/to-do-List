import { useState } from "react";
import './task.css';
import TaskList from "./TaskList";
function List() {
   
    const [tasks,setTasks]=useState([]);
    const addTask = (newTask) => {
        if (newTask.trim() !== "") {
          setTasks([...tasks, newTask]);
        }
      };
    
      const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
      };
    
    return(
         <>
          <TaskList onAdd={addTask} />
          <ul>
          {tasks.map((item,index)=>(
            <li className='task-item'
             key={index}>{item}
                  <button onClick={()=>deleteTask(index)} style={{backgroundColor:'red', color:'white',paddingRight:''}}>DELETE</button>
                  </li>
          ))}
        </ul>
         </>
    )
}

export default List
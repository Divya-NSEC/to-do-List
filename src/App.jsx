
import reactLogo from './assets/react.svg'

import './App.css'
import { useState } from 'react'

function App() {
  const [task,setTask]=useState("");
  const [tasks,setTasks]=useState([]);
  return (
    <>
    <div className='list'>
      <h1>To-Do List</h1>
      <div className='list-insert'>
      <input type="text" placeholder='enter your task' value={task} 
      onChange={(e)=> setTask(e.target.value)} />
      
      <button onClick={()=>{
        if(task.trim()!==""){
          setTasks([...tasks,task]);
          setTask("");
        }
      }}
      style={{backgroundColor:' green' , marginRight:'5px', color:'white'}}>ADD</button>

      
      
      </div>
      
      <ul>
        {tasks.map((item,index)=>(
          <li className='task-item'
           key={index}>{item}
                <button onClick={()=>{
                  const newTasks=tasks.filter((_,i)=>i !==index);
                  setTasks(newTasks);
                }} style={{backgroundColor:'red', color:'white',paddingRight:''}}>DELETE</button>
                </li>
        ))}
      </ul>

      
      </div>
    </>
  )
}

export default App

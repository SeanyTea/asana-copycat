import { useState,useEffect } from "react";
import "./home.css";
import { RiCalendarTodoFill } from "react-icons/ri";
import {TbProgressAlert} from 'react-icons/tb'
import {AiOutlineCheckCircle} from 'react-icons/ai'
import CreateTask from './CreateTask'
import {handleCheckClick} from './static'
import { loadTasks,saveTasks} from "../DataHandle";
import { v4 as uuidv4 } from 'uuid';

function Home() {
  const now = new Date();
  const [taskList,setTaskList] = useState([])
  const [didMount, setDidMount] = useState(false)
  // Get tasks
  useEffect(() =>{
    const saved = loadTasks();
    console.log(saved)
    if (saved){
      setTaskList(JSON.parse(loadTasks()));
    }
    setDidMount(true)
    
  },[])
  useEffect(()=>{
    if (didMount){
      console.log("USE EFFECT",taskList);
      saveTasks(taskList);
    }
    
  },[taskList])
  function HomeTaskItem(props) {
    return <li className = 'home-task' key = {props.id}>
        <div className="task-description">
            <AiOutlineCheckCircle id = {props.id} className = 'checkbox' onClick = {handleCheck} /> 
            <p>{props.taskName}</p>
        </div>
        <p className = 'tag'>Work</p>
    </li>
  }
  function handleCheck(e){
    // This will set the task with the mathcing id to completed
    setTaskList(taskList.map(task => task.id === e.target.id ? {...task, completed: !task.completed}:task))
    console.log("TASKS",taskList)
    saveTasks(taskList);
  }
  function countCompleted(){
    return (taskList.filter(task=>task.completed === true).length)
  }
  function countToDo(){
    return (taskList.filter(task=>task.completed === false).length)
  }
  function addTask(e){
    if (e.key === 'Enter') {
      const newTask = {id:uuidv4(),taskName:e.target.value,completed:false};
    setTaskList([...taskList,newTask]);
    e.target.value = "";
    }
  }
  return (
   
    <div className="home">
       
      <div className="header">
        <h2>Home</h2>
      </div>
      
      <div className="contents">
        <h5>{now.getDayName()}, {now.getMonthName()} {now.getDate()} </h5>
        <h2>{now.getGreetingTime()}, Sean</h2>
        <div className="widget">
          <p>My week</p>
          <p> | </p>

          <p>{countCompleted()} Tasks Completed</p>
        </div>
        <div className="progress">
          <GridItem icon = {<RiCalendarTodoFill className = 'gridIcon' />  } text="To do" num = {countToDo()} />
          <GridItem icon = {<TbProgressAlert className = 'gridIcon' />  } text="In progress" num = "10" />
          <GridItem icon = {<AiOutlineCheckCircle className = 'gridIcon' />  } text="Completed" num = {countCompleted()}/>
        </div>
        <div className="home-tasks">
            <h3>My Tasks</h3>
            
            {taskList.map((task)=>{
              if (task.completed === false){
                return (<HomeTaskItem id = {task.id} taskName = {task.taskName}/>)
              }
            })}
            <input type="text" placeholder = "Click to add a task" onKeyDown = {addTask}/>
        </div>
      </div>
    </div>
  );
}
function GridItem(props) {
  return (
    <div className="gridItem">
        {props.icon}
       <div className="numTasks">
        <h5>{props.text}</h5>
        <p>{props.num} tasks</p>
        </div> 
      
    </div>
  );
}

// Date prototype
(function() {
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  Date.prototype.getMonthName = function() {
      return months[ this.getMonth() ];
  };
  Date.prototype.getDayName = function() {
      return days[ this.getDay() ];
  };
  Date.prototype.getGreetingTime = function(){
    let curHr = this.getHours();
    if (curHr < 12) {
      return ('Good morning')
    } else if (curHr < 18) {
      return ('Good afternoon')
    } else {
      return ('Good evening')
    }
  }
})();

export default Home;

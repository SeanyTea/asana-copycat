import "./home.css";
import { RiCalendarTodoFill } from "react-icons/ri";
import {TbProgressAlert} from 'react-icons/tb'
import {AiOutlineCheckCircle} from 'react-icons/ai'
function Home(props) {
  const now = new Date();
  console.log(now.getTime());
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

          <p>0 Tasks Completed</p>
        </div>
        <div className="progress">
          <GridItem icon = {<RiCalendarTodoFill className = 'gridIcon' />  } text="To do" num = "4" />
          <GridItem icon = {<TbProgressAlert className = 'gridIcon' />  } text="In progress" num = "10" />
          <GridItem icon = {<AiOutlineCheckCircle className = 'gridIcon' />  } text="Completed" num = "2"/>
        </div>
        <div className="home-tasks">
            <h3>My Tasks</h3>
            <HomeTaskItem />
            <HomeTaskItem />
                    
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
function HomeTaskItem(props) {
    return <li className = 'home-task'>
        <div className="task-description">
            <AiOutlineCheckCircle className = 'checkbox' /> 
            <p>This is a task</p>
        </div>

        <p className = 'tag'>Work</p>
        

    </li>
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

import './sidebar.css'
import homeIcon from '../assets/home.svg'
import circleCheck from '../assets/check-circle.svg'
import { AiOutlineFolder } from 'react-icons/ai';
import {AiOutlineHome} from 'react-icons/ai';
function Sidebar(){
    return(
        <div className='sidebar'>
            <ul>
            <SidebarItem icon = {<AiOutlineHome className = "icon"/>} text = "Home" click = {handleHome}/>
            <SidebarItem icon = {<AiOutlineFolder className = "icon"/>} text = "My Workspaces"/>
            </ul>
        </div>
    )
}
const handleHome = ()=>{
    console.log('HI!')
}
function SidebarItem(props){
    return (
        <li className="sidebarItem" onClick = {props.click}>
            {props.icon}
            
            <p>{props.text}</p>
        </li>
    )
}
export default Sidebar;
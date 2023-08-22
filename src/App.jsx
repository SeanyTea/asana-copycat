import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import Home from './Home/Home'
import { v4 as uuidv4 } from 'uuid';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="main">
      <Sidebar />
      <Home />
      </div>
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './Sidebar/Sidebar'
import Home from './Home/Home'
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

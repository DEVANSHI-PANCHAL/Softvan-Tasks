import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [show, setShow] = useState(false)
  const handleToggle = () =>{
    setShow(!show)
  }
  return (
    <>
     {show && <p>This is a paragraph</p>}
     <button onClick={handleToggle}>Toggle</button>
    </>
  )
}

export default App

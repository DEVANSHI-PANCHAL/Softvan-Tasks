import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './components/SimpleForm'
import SimpleFormWithYup from './components/SimpleFormWithYup'
import RefactoredForm from './components/RefactoredForm'

function App() {

  return (
    <div className='App'>
   
   {/* <SimpleForm/> */}
   {/* <SimpleFormWithYup/> */}
   <RefactoredForm/>
    </div>
  )
}

export default App

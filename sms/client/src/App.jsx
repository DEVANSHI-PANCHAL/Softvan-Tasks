import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './pages/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentPage from './pages/StudentPage'

function App() {

  return (
    <>
    {/* <Dashboard/> */}
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<StudentPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

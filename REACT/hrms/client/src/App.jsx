// App.js
import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Registeration from './components/Registeration'
import Login from './components/Login'
import Home from './components/Home'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = (status) => {
    setIsAuthenticated(status)
  }

  return (
    <Routes>
      <Route path="/register" element={<Registeration />} />
      <Route path="/login" element={<Login setAuth={setAuth} />} />
      <Route
        path="/"
        element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
      />
    </Routes>
  )
}

export default App

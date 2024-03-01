import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import withToast from "./components/WithToast"; // Import your withToast HOC

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap your SignIn component with the withToast HOC directly */}
        <Route path="/" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/projects" element={<Projects />} />
        {/* No need to pass showToast prop to SignIn */}
        <Route path="/sign-in" element={<SignIn />} />
        {/* Similarly, for SignUp */}
        {/* <Route path="/sign-up" element={<SignUp />} /> */}
        {/* <Route path="/users" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default withToast(App); // Wrap your App component with the withToast HOC

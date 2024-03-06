import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import withToast from "./components/WithToast"; // Import your withToast HOC

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        {/* <Route path="/projects" element={<Projects />} /> */}
        <Route path="/sign-in" element={<SignIn />} />
   
      </Routes>
    </BrowserRouter>
  );
}

export default withToast(App); // Wrap your App component with the withToast HOC

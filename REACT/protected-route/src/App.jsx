import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Protected from './components/Protected';
import Unprotected from './components/Unprotected';
import Home from './components/Home'; // Assuming you have a Home component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    console.log("loggedInUser: " + isAuthenticated);
  }

  const logout = () => {
    setIsAuthenticated(false);
    console.log("loggedInUser: " + isAuthenticated);
  }

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/'>
              Link to Home Page
            </Link>
          </li>
          <li>
            <Link to='/protected'>
              Link to Protected Page
            </Link>
          </li>
          <li>
            <Link to='/unprotected'>
              Link to Unprotected Page
            </Link>
          </li>
        </ul>
        <button onClick={login}>Login</button>
        <br />
        <button onClick={logout}>Logout</button>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/protected' element={<Protected isAuthenticated={isAuthenticated} />} />
        <Route path='/unprotected' element={<Unprotected />} />
      </Routes>
    </Router>
  );
}

export default App;

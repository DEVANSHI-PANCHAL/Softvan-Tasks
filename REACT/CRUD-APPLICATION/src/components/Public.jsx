import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/public.css';

function WelcomePage() {
  return (
    <div className="welcome-page">
      <h1>Welcome to Our Application</h1>
      <p>We are glad to see you here.</p>
      <button ><Link to={"/login"} style={{ textDecoration: 'none', color:"white" }}>Get Started</Link></button>
    </div>
  );
}

export default WelcomePage;
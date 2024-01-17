import React, { useState } from 'react';
import './Signup.css';

const Signup = ({ onSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    const user = { id: 1, email: 'user@example.com' };
    onSignup(user);
  };

  return (
    <div className="signup-card">
      <h2 className="signup-heading">Signup</h2>
      <label className="signup-label">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="signup-input"
      />
      <br />
      <label className="signup-label">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="signup-input"
      />
      <br />
      <button onClick={handleSignup} className="signup-button">
        Signup
      </button>
      {error && <p className="signup-error">{error}</p>}
    </div>
  );
};

export default Signup;

import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/signup.css';

function SignupPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [status, setStatus] = useState(null);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setStatus({
        type: 'error',
        message: 'Passwords do not match',
      });
      return;
    }

    // Call API to sign up user with form data
    // If successful, redirect to welcome page
    // If not, display error message
  };

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setStatus(null);
      }, 5000);
    }
  }, [status]);

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <p>Create your account.</p>
      <form onSubmit={handleSubmit}>
        {status && (
          <p className={status.type}>
            {status.message}
          </p>
        )}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          ref={nameRef}
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          ref={emailRef}
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          ref={passwordRef}
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          ref={confirmPasswordRef}
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? &nbsp;
        <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default SignupPage;
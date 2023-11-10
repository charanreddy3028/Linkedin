// Register.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Register/Register.css';
import { useDispatch } from 'react-redux';
import { registerUser } from '../Redux/Action';

const Register = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    const newUser = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(registerUser(newUser));
  };

  return (
    <div>
      <div className="form-container">
        <p className="logo">Linkedin</p>
        <div className="form-wrapper">
          <span className="title">Register</span>
          <form>
            <input
              type="text"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>
              <Link to="/" style={{ textDecoration: 'none' }}>
                SignUp
              </Link>
            </button>
          </form>
          <p>
            You already have an account?{' '}
            <Link to="/" style={{ textDecoration: 'none' }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

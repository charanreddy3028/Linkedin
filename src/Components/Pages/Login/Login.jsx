import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser ,updateName} from '../Redux/Action';
import { Link } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated);
  
  // Use React state to manage form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    dispatch(loginUser(email, password, name));
    dispatch(updateName(name));
  };

  return (
    <div className="form-container">
      <span className="logo">Linkedin</span>
      <div className="form-wrapper">
        <span className="title">Login</span>
        <form>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignIn}>{isAuthenticated ? (
            <Link to="/home" style={{ textDecoration: 'none' }}>
              SignIn
            </Link>
          ) : (
            'SignIn'
          )}</button>
        </form>
        <p>
          You don't have an account?{' '}
          <Link to="/register" style={{ textDecoration: 'none' }}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [form_valid, setform_valid] = useState(false);


  const handle_email = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handle_password = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };

  const validateForm = (newEmail, newPassword) => {
    const isValid = newEmail !== '' && newPassword !== '';
    setform_valid(isValid);
  };

  const handle_signin = () => {
    if (form_valid) {

      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="form-container">
        <span className="logo">Linkedin</span>
      <div className="form-wrapper">
        
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" required     value={email}    onChange={handle_email}
          />
          <input type="password" placeholder="password" required  value={password} onChange={handle_password}
          />
          <button onClick={handle_signin}><Link to={form_valid ? '/home' : ''} >SignIn</Link></button>
        </form>
        <p> You don't have an account? <Link to="/register" style={{ textDecoration: 'none' }}> Register</Link></p>
      </div>
    </div>
  );
};

export default Login;

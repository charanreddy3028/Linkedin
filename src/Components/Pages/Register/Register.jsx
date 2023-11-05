import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Register/Register.css'

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleFirstNameChange = (e) => {
    const newFirstName = e.target.value;
    setFirstName(newFirstName);
    validateForm(newFirstName, lastName, email, password);
  };

  const handleLastNameChange = (e) => {
    const newLastName = e.target.value;
    setLastName(newLastName);
    validateForm(firstName, newLastName, email, password);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(firstName, lastName, newEmail, password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(firstName, lastName, email, newPassword);
  };

  const validateForm = (newFirstName, newLastName, newEmail, newPassword) => {
    // Check if all fields are not empty
    const isValid =
      newFirstName.trim() !== '' &&
      newLastName.trim() !== '' &&
      newEmail.trim() !== '' &&
      newPassword.trim() !== '';
    setIsFormValid(isValid);
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
              onChange={handleFirstNameChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={lastName}
              onChange={handleLastNameChange}
            />
            <input
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            <button>
              <Link to={isFormValid ? '/' : ''} style={{ textDecoration: 'none' }} disabled={!isFormValid}>
                SignUp
              </Link>
            </button>
          </form>
          <p>
            You do have an account? <Link to="/" style={{ textDecoration: 'none' }}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

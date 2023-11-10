
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExperience } from '../Redux/Action';
import '../Profile/Experiencepop.css'

const ExperiencePopup = ({ onClose }) => {
  const dispatch = useDispatch();
  const [role, setRole] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [location, setLocation] = useState('');

  const handleAddExperience = () => {
    dispatch(addExperience({ role, companyName, fromDate, toDate, location }));
    onClose();
  };
  

  return (
    <div className="popup-overlay">
    <div className="popup-content ">
      <h2>Add Experience</h2>
      <form>
        <div className="input-container">
        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} placeholder="Role" />
        <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="Company Name" />
        <input type="text" value={fromDate} onChange={(e) => setFromDate(e.target.value)} placeholder="From Date" />
        <input type="text" value={toDate} onChange={(e) => setToDate(e.target.value)} placeholder="To Date" />
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
        
        </div>
        
        <button className='add-btn' type="button" onClick={handleAddExperience}>Add</button>
        <button className='close-btn' type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
    </div>
  );
};

export default ExperiencePopup;

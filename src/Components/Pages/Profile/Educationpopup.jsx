// components/Profile/EducationPopup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEducation, updateEducation } from '../Redux/Action';
import './Experiencepop.css'

const EducationPopup = ({ onClose, education }) => {
  const dispatch = useDispatch();
  const [degree, setDegree] = useState(education ? education.degree : '');
  const [institution, setInstitution] = useState(education ? education.institution : '');
  const [fromDate, setFromDate] = useState(education ? education.fromDate : '');
  const [toDate, setToDate] = useState(education ? education.toDate : '');
  const [location, setLocation] = useState(education ? education.location : '');

  const handleSaveEducation = () => {
    const newEducation = {
      degree,
      institution,
      fromDate,
      toDate,
      location,
    };

    if (education) {
      dispatch(updateEducation(education.index, newEducation));
    } else {
      dispatch(addEducation(newEducation));
    }

    onClose();
  };

  return (
    <div className="popup-overlay">

   
    <div className="popup-content">
      <h2>{education ? 'Edit Education' : 'Add Education'}</h2>
      <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} placeholder="Degree" />
      <input type="text" value={institution} onChange={(e) => setInstitution(e.target.value)} placeholder="Institution" />
      <input type="text" value={fromDate} onChange={(e) => setFromDate(e.target.value)} placeholder="From Date" />
      <input type="text" value={toDate} onChange={(e) => setToDate(e.target.value)} placeholder="To Date" />
      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
      <button className='add-btn' onClick={handleSaveEducation}>Save</button>
      <button className='close-btn' onClick={onClose}>Cancel</button>
    </div>
    </div>
  );
};

export default EducationPopup;

import React from 'react';
import '../Home/popup.css';

const Popup = ({ onSave, onClose, Person, setText, setPerson, text }) => {
  const handleSave = () => {
    onSave();
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <input
          type="text"
          placeholder="Name"
          value={Person}
          onChange={(e) => setPerson(e.target.value)}
        />
        <textarea
          placeholder="Type your post..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className='add-btn' onClick={handleSave}>Save</button>
        <button className='close-btn' onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Popup;

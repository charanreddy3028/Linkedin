import React from 'react';
import '../Home/popup.css';

const Popup = ({ onSave, onClose, Person, setText, setPerson, text ,url,setUrl,img,setImg}) => {
  const handleSave = () => {
    onSave();
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
      <input
          type="text"
          placeholder="profile url"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={Person}
          onChange={(e) => setPerson(e.target.value)}
        />
        <input
          type="text"
          placeholder="IMAGE URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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

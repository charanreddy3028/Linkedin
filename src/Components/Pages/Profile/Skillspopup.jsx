import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { addItem, deleteItem } from '../Redux/Action';
import '../Profile/Skillspopup.css'



const SkillsPopup = ({ onClose }) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.skills.items); 
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (event) => {
    event.preventDefault();
    if (newItem) {
      dispatch(addItem(newItem));
      setNewItem('');
    }
  };

  const handleDeleteItem = (index) => {
    dispatch(deleteItem(index));
  };

  return (
    <div className="popup-overlay">
        <div className="popup-content">
            <h2>Add Skill</h2>
            <form onSubmit={handleAddItem}>
                <div className="input-container">
                    <input
                    type="text"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder="Enter skill"
                    />
                </div>
                
                <button className='add-btn' type="submit">Add</button>
                <button className='close-btn' onClick={onClose}>Close</button>
            </form>

           

            
    </div>
    </div>
    
  );
};

export default SkillsPopup;

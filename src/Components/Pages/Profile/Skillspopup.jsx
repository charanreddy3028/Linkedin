import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; 
import { addItem} from '../Redux/Action';
import '../Profile/Skillspopup.css'



const SkillsPopup = ({ onClose }) => {
  const dispatch = useDispatch();

  const [newItem, setNewItem] = useState('');

  const handleAddItem = (event) => {
    event.preventDefault();
    if (newItem) {
      dispatch(addItem(newItem));
      setNewItem('');
    }
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateAbout } from "../Redux/Action";
import './Textarea.css'

export default function Textarea(props) {
  const dispatch = useDispatch();
  const [about, setAbout] = useState("");

  function handleClick() {
  
    props.statusfn(true);
  }

  function handleSave() {

    dispatch(updateAbout(about));

    props.statusfn(true);
  }

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>Enter about yourself</p>
        

        <div className="input-container">
          <input type="text"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Enter your about information"
          />
        </div>

        <button className="save-button" onClick={handleSave}>
          Save
        </button>
        <button className="close-btn" onClick={handleClick}>
          cancel
        </button>
      </div>
    </div>
  );
}

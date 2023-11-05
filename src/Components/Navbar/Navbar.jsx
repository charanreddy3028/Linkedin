import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';
import { PiBagSimpleFill } from 'react-icons/pi';
import { IoIosNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='nav'>
      <div className="icons">
        <li><Link to='/home'><AiFillHome />Home</Link></li>
        <li><Link to='/network'><MdPeopleAlt />My Network</Link></li>
        <li><Link to='/jobs'><PiBagSimpleFill />Jobs</Link></li>
        <li><Link to='/messages'><AiFillMessage />Messaging</Link></li>
        <li><Link to='/notifications'><IoIosNotifications />Notifications</Link></li>
        <li>
          <span onClick={toggleDropdown}><CgProfile />Profile</span>
          {isDropdownOpen && (
            <ul className="dropdown" style={{listStyle:'none'}}>
              <li><Link to='/profile'>Profile</Link></li>
              <hr />
              <li>Help</li>
              <hr />
              <li>Settings</li>
              <hr />
              <li><Link to='/'>Sign out</Link></li>
            </ul>
          )}
        </li>
      </div>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import logo from '../Pages/assets/logo.png'
import { Link } from 'react-router-dom';
import { AiFillHome, AiFillMessage,AiOutlineCaretDown } from 'react-icons/ai';
import { MdPeopleAlt } from 'react-icons/md';
import { PiBagSimpleFill } from 'react-icons/pi';
import { IoIosNotifications } from 'react-icons/io';
import { useDispatch,useSelector } from 'react-redux';
import { signOut } from '../Pages/Redux/Action';


const Navbar = () => {
  const dispatch = useDispatch();
  const name= useSelector((state) => state.login.name)
  const [menu, setMenu] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    dispatch(signOut());
  
    
  };
  

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className='nav'>
      <div className="icons">
        <li onClick={() => setMenu('home')}><Link style={{ textDecoration: 'none' }} to='/home'><AiFillHome />Home</Link>{menu === 'home' && <hr />}</li>
        <li onClick={() => setMenu('network')}><Link  style={{ textDecoration: 'none' }} to='/network'><MdPeopleAlt />My Network</Link>{menu === 'network' && <hr />}</li>
        <li onClick={() => setMenu('jobs')}><Link style={{ textDecoration: 'none' }} to='/jobs'><PiBagSimpleFill />Jobs</Link>{menu === 'jobs' && <hr />}</li>
        <li onClick={() => setMenu('messages')}><Link style={{ textDecoration: 'none' }} to='/messages'><AiFillMessage />Messaging</Link>{menu === 'messages' && <hr />}</li>
        <li onClick={() => setMenu('notifications')}><Link style={{ textDecoration: 'none' }} to='/notifications'><IoIosNotifications />Notifications</Link>{menu === 'notifications' && <hr />}</li>
        <li>
          <span onClick={toggleDropdown}><img src={logo} alt="" style={{borderRadius:"50%",width:"30px",height:"30px",paddingLeft:"0px"}}/><AiOutlineCaretDown/> </span>
          {isDropdownOpen && (
            <div className="dropdown" style={{listStyle:'none'}}>
              <li><Link to='/profile'><div className='dropdown-profile'>
                <div className="dropdown-img">
                  <img className="dropdown-img" src={logo} alt="" />
                </div>
                <div className="dropdown-name">
                  <h2 className='h2'>{name}</h2>
                  <p className='.p'>Intern @Techsophy</p>
                </div>
                
                </div>
                <div className="view">
                <p className='view-p'>View Profile</p>
                </div></Link></li>
              <hr />
              <li>Help</li>
              
              <li>Settings</li>
              
              <li className='signout'><Link to="/" onClick={handleSignOut}>
      <button>Sign Out</button>
    </Link></li>
            </div>
          )}
        </li>
      </div>
    </div>
  );
};

export default Navbar;

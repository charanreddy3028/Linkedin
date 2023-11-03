import React from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';
import {AiFillHome,AiFillMessage} from 'react-icons/ai'
import {MdPeopleAlt} from 'react-icons/md'
import {PiBagSimpleFill} from 'react-icons/pi'
import {IoIosNotifications} from 'react-icons/io'
import {CgProfile} from 'react-icons/cg'



const Navbar = () => {
  return (
    <div className='nav'>
      <div className="icons">
        <li><Link to='/home'><AiFillHome/>Home</Link></li>
        <li><Link to='/network'><MdPeopleAlt/>My Network</Link></li>
        <li><Link to='/jobs'><PiBagSimpleFill/>Jobs</Link></li> 
        <li><Link to='/messaging'><AiFillMessage/>Messaging</Link></li>
        <li><Link to='/notifications'><IoIosNotifications/>Notifications</Link></li>
        <li><Link to='/profile'><CgProfile/></Link>Profile<drilldow></drilldow></li>
      </div>
    </div>
  );
}

export default Navbar;


import React from 'react'
import '../Network/Network.css'
import Header from '../../Header/Header'
import {BsFillPeopleFill,BsFillPersonFill} from 'react-icons/bs'
import {BiSolidContact,BiCalendarEvent,BiHash} from 'react-icons/bi'
import{HiUserGroup} from 'react-icons/hi'
import {RiPagesLine} from 'react-icons/ri'
import Card from './Card'
 
const Network = () => {
  return (
    <div>
      <Header/>
      <div className="network">
      <div>
      <div className="network-left">
        <span className='heading'>Manage My Network</span>
        <div className="network-icon">
          <p className='icon'><BsFillPeopleFill/> Connections</p>
          <p>550</p>
        </div>
        <div className="network-icon">
          <p className='icon'><BiSolidContact/> Contacts</p>
          <p>1300</p>
        </div>
        <div className="network-icon">
          <p className='icon'><BsFillPersonFill/> Following & Followers</p>
          
        </div>
        <div className="network-icon">
          <p className='icon'><HiUserGroup/> Group</p>
          <p>10</p>
        </div>
        <div className="network-icon">
          <p className='icon'><BiCalendarEvent/> Events</p>
          
        </div>
        <div className="network-icon">
          <p className='icon'><RiPagesLine/> Pages</p>
          <p>10</p>
        </div>
        <div className="network-icon">
          <p className='icon'><BiSolidContact/> Newsletters</p>
          <p>15</p>
        </div>
        <div className="network-icon">
          <p className='icon'><BiHash/> Hashtags</p>
          <p>2</p>
        </div>
        </div>
 
 
      </div>
      <div className="network-right">
        <div className="network-right-t1">
        <p>No pending invitations</p>
        <p className='manage'>Manage</p>
        </div>
 
        <div className="network-right-t2">
          
          <Card/>
          
        </div>
        
 
      </div>
      </div>
    </div>
  )
}
 
export default Network
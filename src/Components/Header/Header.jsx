import React from 'react'
import '../Header/Header.css'
import Navbar from '../Navbar/Navbar'
import logo from '../Pages/assets/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="" width="30px" height="30px" />
      </div>
      <div className="input">
        <div className="search">
          <AiOutlineSearch />

        </div>
        <div >
          <input className='header-input' type="text" placeholder='Seacrh' />

        </div>



      </div>



      <div className="navbar">
        <Navbar />

      </div>

    </div>
  )
}

export default Header

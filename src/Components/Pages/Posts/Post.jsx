import React from 'react'
import './Post.css'
import logo from '/home/sricharan/Desktop/React projects/Linkedin/linkedin/src/Components/assets/logo.png'
import {FaGlobeAsia} from 'react-icons/fa'

const Post = () => {
  return (
    <div>
        <div className="image">
            <img src={logo} alt="" style={{ borderRadius: "50%", height: "50px", width: "50px" }} />
            <div className="head">
                <span>Sricharan gunupati</span>
                <span>Intern@Techsospanhy</span>
                <span>4d.<FaGlobeAsia/> </span>
            </div>
        </div>
      
    </div>
  )
}

export default Post

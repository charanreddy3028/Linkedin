import React from 'react';
import { FaGlobeAsia } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiLike, BiRepost } from 'react-icons/bi';
import { FaRegCommentDots } from 'react-icons/fa';
import { BsFillSendFill } from 'react-icons/bs';
import '../Posts/Post.css'
import logo from '../assets/logo.png'
import bg from '../assets/bgimage.jpeg'

const PostItem = ({ post, onDelete }) => {
  return (
    <div className="post">
      <div className="flex">
        <div className="image">
          <img src={logo} alt="" style={{ borderRadius: "50%", height: "50px", width: "50px" }} />
        </div>
        
        <div className="head">
          <div>
            <div className="post-del">
            <span className='name'>{post.Person}</span>
            
            </div>
            <span className='company'>Techsophy</span>
            <span className='time'>5h Ago <FaGlobeAsia /></span>
          </div>
        </div>
        <div className="del">
        <RiDeleteBin6Line onClick={() => onDelete(post.id)} />
        </div>
      </div>

      <div className="bgimage">
        <p>{post.text}</p>
        <img src={bg} alt="" />
      </div>

      <div className="likes" style={{ listStyle: "none" }}>
        <li> <BiLike /> Like</li>
        <li><FaRegCommentDots /> Comment</li>
        <li><BiRepost /> Repost</li>
        <li><BsFillSendFill /> Send</li>
      </div>
    </div>
  );
};

export default PostItem;

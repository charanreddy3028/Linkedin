import logo from '../assets/logo.png'
import React, { useState } from 'react'
import '../Home/Home.css'
import bg from '../assets/bgimage.jpeg'
import {BsFillBookmarkFill} from 'react-icons/bs';
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import {MdPeopleAlt} from 'react-icons/md'
import { Link } from 'react-router-dom';
import {GoFileMedia} from 'react-icons/go';
import {PiBagSimpleFill} from 'react-icons/pi'
import {PiArticleBold} from 'react-icons/pi'
import Post from '../Posts/Post';
import Header from '../../Header/Header';
import News from '../News/News';
import { useDispatch,useSelector } from 'react-redux';

import Popup from './popup';
import { addPost } from '../Redux/Action';

const Home = () => {
    const dispatch = useDispatch();
  const name = useSelector((state) => state.login.name);
  const posts = useSelector((state) => state.posts);

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [Person, setPerson] = useState('');
  const [text, setText] = useState('');
  const [url,setUrl] =useState('');
  const [img,setImg] =useState('');

  const handleSave = () => {
    if (Person && text ) {
      dispatch(addPost({ id: Date.now(), Person: Person, text: text ,url:url,img:img})); // Dispatch the addPost action
      setPerson('');
      setText('');
      setUrl('');
      setImg('');
      setPopupOpen(false);
    }
  }

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
    }
    
    return (
        <><Header /><div className='home'>
            <div className="sidebar">
                <div className="sidebar-top">
                    <div className="pic">
                        <div className="bg-image">
                            <img src={bg} alt="" style={{ height: "20%", width: "100%" ,borderRadius:"10px  10px 0px 0px"}} />
                        </div>
                        <div className="profile-img">
                            <Link to="/profile"><img src={logo} alt="" style={{ borderRadius: "50%", height: "50px", width: "50px" }} /></Link>
                        </div>
                    </div>
                    <div className="name">
                        <h1><Link to="/profile" style={{ textDecoration: "none", color: "black" }}>{name}</Link> </h1>
                        <p>Intern @Techsophy</p>
                        <hr />
                    </div>
                    <div className="impressions">
                        <div className="views">
                            <p>Profile Viewers</p>
                            <p>60</p>
                        </div>
                        <div className="impressions-post">
                            <p>Post Impressions</p>
                            <p>65</p>
                        </div>
                        <hr />
                    </div>
                    <div className="premium">
                        <div>
                            <h3>All Exclusive tools & insights</h3>
                            <p>Try Premium for free</p>
                        </div>
                        <hr />
                    </div>
                    <div className="items">
                        <span><BsFillBookmarkFill />  My items</span>
                    </div>
                </div>
                <div className="sidebar-bottom">
                    <div className="recent">
                        Recent
                        <MdOutlineKeyboardArrowDown />
                    </div>
                    <div className="groups">
                        <h1>Groups</h1>
                        <p><MdPeopleAlt />Machine Learning group </p>


                    </div>
                    <div className="events">
                        <h1>New Events</h1>
                        <p>+</p>
                    </div>
                    <div className="hashtags">
                        <h1>New Hashtags</h1>
                        <p>+</p>
                    </div>
                    <hr />
                    <div className="load">
                        <p><Link to="/Network" style={{ textDecoration: "none", color: "grey" }}>Discover More</Link></p>
                    </div>
                    

                </div>
            </div>
            <div className="middle">
                <div className="post">
                    <div className="search-post">
                        <img src={logo} alt="" style={{ borderRadius: "50%", height: "50px", width: "50px" }} />
                        <input type="text" placeholder='Start a post' onClick={togglePopup} />

                    </div>
                    <div className="post-icons">
                        <li><GoFileMedia /> Media</li>
                        <li><PiBagSimpleFill />Job</li>
                        <li><PiArticleBold /> write an article</li>

                    </div>
                </div>
                <hr style={{width:"555px"}} />
                <div className="posts">
                    <Post posts={posts}/>
                </div>
            </div>
            <div className="right-bar">
                <News/>
            </div>
            {
                isPopupOpen &&(
                    <Popup onSave={handleSave} onClose={togglePopup}  Person={Person} setText={setText} setPerson={setPerson} text={text} url={url} setUrl={setUrl} img={img} setImg={setImg} />
                )
            }
        </div></>
    )
}

export default Home

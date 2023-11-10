import React, { useState } from 'react';
import '../Profile/Profile.css';
import Header from '../../Header/Header';
import { BsArrowRightShort, BsPencil } from 'react-icons/bs';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import bg from '../assets/bgimage.jpeg';
import logo from '../assets/logo.png';
import { useDispatch } from 'react-redux';
import { addItem, updateAbout } from '../Redux/Action';
import { useSelector } from 'react-redux';
import Textarea from './Textarea';
import SkillsPopup from './Skillspopup';
import { deleteItem ,deleteExperience,deleteEducation,updateEducation} from '../Redux/Action';
import ExperiencePopup from './Experiencepopup';
import {RiDeleteBin6Line} from 'react-icons/ri'
import EducationPopup from './Educationpopup';

const Profile = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.skills.items);
  const name = useSelector((state) => state.login.name);
  const About = useSelector((state) => state.login.about);
  const experiences = useSelector((state) => state.experiences.experiences);
  const educations = useSelector((state) => state.educations.educations); 

  const [isEditing, setIsEditing] = useState(false);
  const [editedAbout, setEditedAbout] = useState(About);
  const [isSkillsPopupOpen, setIsSkillsPopupOpen] = useState(false);
  const [isExperiencePopupOpen, setIsExperiencePopupOpen] = useState(false);
  const [isEducationPopupOpen, setIsEducationPopupOpen] = useState(false);
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [editedEducationIndex, setEditedEducationIndex] = useState(null);


  const openEducationPopup = () => {
    setIsEducationPopupOpen(true);
  };

  const closeEducationPopup = () => {
    setIsEducationPopupOpen(false);
  };


  

  const handleCancelEducationEdit = () => {
    setIsEditingEducation(false);
    setEditedEducationIndex(null);
  };
  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };

  const openExperiencePopup = () => {
    setIsExperiencePopupOpen(true);
  };

  const closeExperiencePopup = () => {
    setIsExperiencePopupOpen(false);
  };

  const handleDeleteExperience = (index) => {
    dispatch(deleteExperience(index));
  };

  const openSkillsPopup = () => {
    setIsSkillsPopupOpen(true);
  };

  const closeSkillsPopup = () => {
    setIsSkillsPopupOpen(false);
  };


  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {

    dispatch(updateAbout(editedAbout));
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedAbout(About);
    setIsEditing(false);
  };

 

  return (
    <>
      <Header />
      <div className="profile">
        <div className="profile-left">
          <div className="profile-left-t1">
            <p>
              48 profile viwers <span>last 90 days</span>
            </p>
            <p>
              view all analytics <BsArrowRightShort />
            </p>
          </div>
          <div className="profile-left-t2">
            <img src={bg} alt="" className="profile-bgimage" />
            <img src={logo} alt="" className="profile-image" />
            <div className="section">
              <div className="section-l">
                <div className="profile-name">
                  <div className="profile-heading">{name}</div>
                  <div className="pronoun">(He/Him)</div>
                </div>
                <div className="position">Intern@Techsophy</div>
                <div className="loc">
                  Hyderabad, Telangana <span>Contact Info</span>
                </div>
                <div className="connections">500+connections</div>
                <div className="buttons">
                  <button className="b-1">Open to</button>
                  <button className="b-2">Add Profile Section</button>
                  <button className="b-3">More</button>
                </div>
              </div>
              <div className="section-r">
                <div className="org">Techsophy</div>
                <div className="ins">vignan Institute of technology and science</div>
              </div>
            </div>
          </div>
          <div className="profile-left-t3">
            <div className="profile-left-t3-edit">
              <h2>About</h2>
              <BsPencil onClick={handleEditClick} />
            </div>
            {isEditing ? (
              <div>
                <Textarea
                  about={editedAbout}
                  setAbout={setEditedAbout}
                  onSave={handleSaveClick}
                  onCancel={handleCancelClick}
                  statusfn={(status) => setIsEditing(!status)}
                />

              </div>
            ) : (
              <p>{About}</p>
            )}
          </div>
          <div className="profile-left-t4">
            <div className="profile-left-t4-edit">
              <h2>Skills</h2>
              <BsPencil onClick={openSkillsPopup} />
            </div>
            <div className="profile-left-t4-li">
              {items.map((item, index) => (
                <div >
                  <li key={index}>
                  {item}
                  <button onClick={() => dispatch(deleteItem(index))}>Remove</button>   
                </li>
                <hr />
                </div>
              ))}
              
            </div>
            {isSkillsPopupOpen && (
            <SkillsPopup onClose={closeSkillsPopup} />
          )}
          </div>
        <div className="profile-left-t5">
        <div className="profile-left-t5-edit">
          <h2>Experience</h2>
          <BsPencil onClick={openExperiencePopup} />
          
        </div>
        
        {experiences.map((experience, index) => (
          <div className='exp' key={index}>
            <div className="role">
            <h3>{experience.role}</h3>
            <RiDeleteBin6Line onClick={() => handleDeleteExperience(index)}/>
            </div>
            <p>{experience.companyName}</p>
            <div className="date">
            <p>{experience.fromDate}</p>
            <p>{experience.toDate}</p>
            </div>
            <p>{experience.location}</p>
            <hr />
          </div>
        ))}
      </div>

      {isExperiencePopupOpen && (
        <ExperiencePopup onClose={closeExperiencePopup} />
      )}
      <div className="profile-left-t6">
        <div className="profile-left-t6-edit">
          <h2>Education</h2>
          <BsPencil onClick={openEducationPopup} />
        </div>

        {educations.map((education, index) => (
          <div className='exp' key={index}>
            <div className="role">
              <h3>{education.degree}</h3>
                <RiDeleteBin6Line onClick={() => handleDeleteEducation(index)}/>
            </div> 
                <p>{education.institution}</p>
                <div className="date">
                  <p>{education.fromDate}</p>
                  <p>{education.toDate}</p>
                </div>
                
                <p>{education.location}</p>
                <hr />
             
            
          </div>
        ))}
      </div>

      {isEducationPopupOpen && (
        <EducationPopup onClose={closeEducationPopup} />
      )}

          
        </div>
        <div className="profile-right">
          <div className="profile-right-t1">
            <div className="language">
              <h2>Profile Language <MdOutlineModeEditOutline /></h2>
              <p>English</p>
            </div>
            <hr style={{ color: "lightgray" }} />
            <div className="language">
              <h2>Public profile &Url<MdOutlineModeEditOutline /></h2>
              <p style={{ color: "grey" }}>https://www.linkedin.com/in/sricharangunupati</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

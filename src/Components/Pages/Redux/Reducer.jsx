// reducers.js
import { combineReducers } from 'redux';

const skillsReducer = (state = { items: [['Python'], ['React'], ['Javascript']], }, action) => {
  switch (action.type) {
    case 'ADD_SKILL':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((_, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const loginReducer = (state = { isAuthenticated: false, name: '', about: 'Intern at Techsophy' }, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      const { email, password,  } = action.payload;
      const isAuthenticated = email === '12' && password === '12';
      return {
        ...state,
        isAuthenticated,
      };
    case 'SIGN_OUT':
      return {
        isAuthenticated: false,
        name: '',
      };
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.payload,
      };
    case 'UPDATE_ABOUT':
      return {
        ...state,
        about: action.payload,
      };
    default:
      return state;
  }
};

const registerReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};

const experienceReducer = (state = { experiences: [{role:'Software Engineer Intern',companyName:'Techsophy',fromDate:'21-08-2023',toDate:'till-date',location:'Hyderabad'}] }, action) => {
  switch (action.type) {
    case 'ADD_EXPERIENCE':
      return {
        ...state,
        experiences: [...state.experiences, action.payload],
      };
    case 'DELETE_EXPERIENCE':
      const newExperiences = state.experiences.filter((_, index) => index !== action.payload);
      return {
        ...state,
        experiences: newExperiences,
      };
    case 'UPDATE_EXPERIENCE':
      const { index, experience } = action.payload;
      const updatedExperiences = [...state.experiences];
      updatedExperiences[index] = experience;
      return {
        ...state,
        experiences: updatedExperiences,
      };
    default:
      return state;
  }
};

const educationReducer = (state = { educations: [{degree:'B Tech',institution:'Vignan Institute of technology and science',fromDate:'12-07-2018',toDate:'06-06-2022',location:'Hyderabad'}] }, action) => {
  switch (action.type) {
    case 'ADD_EDUCATION':
      return {
        ...state,
        educations: [...state.educations, action.payload],
      };
    case 'DELETE_EDUCATION':
      const newEducations = state.educations.filter((_, index) => index !== action.payload);
      return {
        ...state,
        educations: newEducations,
      };
    case 'UPDATE_EDUCATION':
      const { index, education } = action.payload;
      const updatedEducations = [...state.educations];
      updatedEducations[index] = education;
      return {
        ...state,
        educations: updatedEducations,
      };
    default:
      return state;
  }
};

const postReducer =(state={ posts:[]},action) =>{
  switch (action.type){
    case 'ADD_POST':
      return{
        ...state,
        posts:[...state.posts,action.payload]
      }
      case 'DELETE_POST':
        return{
          ...state,
          posts: state.posts.filter((post)=>post.id !== action.payload),
        }

      default: return state;
  }
}

const rootReducer = combineReducers({
  skills: skillsReducer,
  login: loginReducer,
  register: registerReducer,
  experiences: experienceReducer,
  educations: educationReducer,
  posts:postReducer,

});

export default rootReducer;

// actions.js

// Define action types
export const ADD_SKILL = 'ADD_SKILL';
export const REGISTER_USER = 'REGISTER_USER';
export const UPDATE_NAME = 'UPDATE_NAME';
export const SIGN_OUT = 'SIGN_OUT';
export const UPDATE_ABOUT = 'UPDATE_ABOUT';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_EDUCATION = 'ADD_EDUCATION';
export const UPDATE_EDUCATION = 'UPDATE_EDUCATION';
export const DELETE_EDUCATION = 'DELETE_EDUCATION';

// Action creators
export function addItem(newItem) {
  return {
    type: ADD_SKILL,
    payload: newItem,
  };
}

export const loginUser = (email, password, name) => {
  return {
    type: 'LOGIN_USER',
    payload: { email, password, name },
  };
};

export function signOut() {
  return {
    type: SIGN_OUT,
  };
}

export function registerUser(newUser) {
  return {
    type: REGISTER_USER,
    payload: newUser,
  };
}

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name,
  };
}

export function updateAbout(about) {
  return {
    type: UPDATE_ABOUT,
    payload: about,
  };
}

export function deleteItem(index) {
  return {
    type: DELETE_ITEM,
    payload: index,
  };
}

export const addExperience = (experience) => ({
  type: 'ADD_EXPERIENCE',
  payload: experience,
});

export const deleteExperience = (index) => ({
  type: 'DELETE_EXPERIENCE',
  payload: index,
});

export const updateExperience = (index, editedExperience) => ({
  type: 'UPDATE_EXPERIENCE',
  payload: { index, experience: editedExperience },
});

export const addEducation = (education) => ({
  type: ADD_EDUCATION,
  payload: education,
});

export const updateEducation = (index, editedEducation) => ({
  type: UPDATE_EDUCATION,
  payload: { index, education: editedEducation },
});

export const deleteEducation = (index) => ({
  type: DELETE_EDUCATION,
  payload: index,
});



export const addPost = (newPost) => ({
  type: 'ADD_POST',
  payload: newPost,
});


export const deletepost =(postId) =>({
  type:'DELETE_POST',
  payload:postId,
})
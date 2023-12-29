import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "n/a",
  userId: null,
  userPic: null,
};

const customUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, userName: action.payload };
    case "SET_USERID":
      return { ...state, userId: action.payload };
    case "SET_USERID":
      return { ...state, userPic: action.payload };
    default:
      return state;
  }
};

export const setUsername = (username) => {
  return {
    type: "SET_USERNAME",
    payload: username,
  };
};

export const setUserid = (userid) => {
  return {
    type: "SET_USERID",
    payload: userid,
  };
};

export const setUserpic = (userpic) => {
  return {
    type: "SET_USERPIC",
    payload: userpic,
  };
};

export default customUserReducer;

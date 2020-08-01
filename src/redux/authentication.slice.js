import { createSlice } from '@reduxjs/toolkit';

// Authentiaction slice really only keeps track of the current users name
// but it does have actions for Logging in and Logging out.
// It will also save the user to sessionStorage to allow authentication
// to persist between page reloads

const initialState = { currentUser: null };

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    userLoggedIn(state, action) {
      sessionStorage.setItem('currentUser', action.payload);
      return { ...state, currentUser: action.payload };
    },
    userLoggedOut(state) {
      sessionStorage.removeItem('currentUser');
      return { ...state, currentUser: null };
    },
  },
});

export default authenticationSlice.reducer;

export const { userLoggedIn, userLoggedOut } = authenticationSlice.actions;

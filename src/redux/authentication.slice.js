import { createSlice } from '@reduxjs/toolkit';

const initialState = { currentUser: null };

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    userLoggedIn(state, action) {
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

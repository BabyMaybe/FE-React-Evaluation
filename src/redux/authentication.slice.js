/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Authentiaction slice really only keeps track of the current users name
// but it does have actions for Logging in and Logging out.
// It will also save the user to sessionStorage to allow authentication
// to persist between page reloads

const loginEndpoint = `${process.env.REACT_APP_BACKEND_URL}/users/login`;
const logoutEndpoint = `${process.env.REACT_APP_BACKEND_URL}/users/logout`;

const initialState = {
  currentUser: null,
  status: 'idle',
};

export const loginUser = createAsyncThunk('authentication/login',
  async userData => {
    const response = await fetch(loginEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData),
    });
    if (response.status !== 200) {
      throw new Error('Please enter valid login credentials');
    }
    return response.json();
  });

export const logoutUser = createAsyncThunk('authentication/logout',
  async (data, { getState }) => {
    const { token } = getState().authentication.currentUser;

    const response = await fetch(logoutEndpoint, {
      method: 'POST',
      body: JSON.stringify(token),
      headers: { Authorization: token },
    });

    if (response.status !== 200) {
      throw new Error('Could not logout');
    }

    return {};
  });

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    userLoggedIn(state, action) {
      sessionStorage.setItem('currentUser', action.payload);
      return { ...state, currentUser: action.payload };
    },
    userReturned(state, action) {
      sessionStorage.setItem('username', action.payload.username);
      sessionStorage.setItem('token', action.payload.token);
      return { ...state, currentUser: action.payload };
    },
    userLoggedOut(state) {
      sessionStorage.removeItem('currentUser');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('token');
      return { ...state, currentUser: null };
    },
  },
  extraReducers: {
    [loginUser.pending]: state => {
      state.status = 'loading';
    },
    [loginUser.fulfilled]: (state, action) => {
      const user = {
        username: action.payload.user.username,
        token: `Bearer ${action.payload.token}`,
      };

      state.status = 'succeeded';
      state.currentUser = user;

      sessionStorage.setItem('username', user.username);
      sessionStorage.setItem('token', user.token);
    },
    [loginUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [logoutUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [logoutUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.currentUser = {};

      sessionStorage.removeItem('username');
      sessionStorage.removeItem('token');
    },
    [logoutUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default authenticationSlice.reducer;

export const { userLoggedIn, userLoggedOut, userReturned } = authenticationSlice.actions;

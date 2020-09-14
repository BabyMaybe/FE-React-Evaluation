/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { addStylesToTypes } from '../utilities/utilities';

let interestsEndpoint;
if (process.env.NODE_ENV === 'development') {
  interestsEndpoint = `http://${process.env.REACT_APP_BACKEND_URL_DEV}/interests`;
} else {
  interestsEndpoint = 'https://noinc-fe-eval.herokuapp.com/home';
}

// Interests are fetched through a simulated Asynchronous Thunk.
// Regarldess of the response the dummy data is loaded into the store.
export const fetchInterests = createAsyncThunk('interests/fetchInterests',
  async (data, { getState }) => {
    const auth = getState().authentication;
    const response = await fetch(interestsEndpoint, {
      method: 'GET',
      headers: { Authorization: auth.currentUser.token },
    });
    // Interests are also annotated with their types to make styling easier on presentation

    const interests = await response.json();
    return addStylesToTypes(interests);
  });

export const addInterest = createAsyncThunk('skills/add',
  async (data, { getState }) => {
    const auth = getState().authentication;

    const response = await fetch(`${interestsEndpoint}`, {
      method: 'POST',
      headers: { Authorization: auth.currentUser.token, 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.status !== 201) {
      const error = await response.json();
      throw new Error(error.message);
    }
    return response.json();
  });

const interestsSlice = createSlice({
  name: 'interests',
  initialState: { interests: [], status: 'idle', error: null },
  reducers: {
    // This Action is no longer used but allowed you to directly load interests into state
    loadInterests(state, action) {
      return addStylesToTypes(action.payload);
    },
  },
  // The extra reducers handle updating the status during asynchronous loading allowing for loading and resolution screens
  extraReducers: {
    [fetchInterests.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchInterests.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.interests = action.payload;
    },
    [fetchInterests.rejected]: (state, action) => {
      state.status = 'failed';
      // state.interests = addStylesToTypes(action.payload);
      state.error = action.error.message;
    },
    [addInterest.pending]: (state, action) => {
      state.status = 'loading';
    },
    [addInterest.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.interests = addStylesToTypes([...state.interests, action.payload]);
    },
    [addInterest.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default interestsSlice.reducer;

// This selector is also no longer used but can be used to grab an individual interest by its ID
export const selectInterestById = (state, interestId) => state.interests.find(interest => interest.id === interestId);

export const { loadInterests } = interestsSlice.actions;

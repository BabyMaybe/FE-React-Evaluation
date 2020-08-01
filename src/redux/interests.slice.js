import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { addStylesToTypes } from '../utilities/utilities';
import { fakeInterests } from '../dummy-data';

// Interests are fetched through a simulated Asynchronous Thunk.
// Regarldess of the response the dummy data is loaded into the store.
export const fetchInterests = createAsyncThunk('interests/fetchInterests', async () => {
  await fetch('http://localhost:3000');
  // Interests are also annotated with their types to make styling easier on presentation
  return addStylesToTypes(fakeInterests);
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
      state.interests = action.payload;
      state.error = action.error.message;
    },
  },
});

export default interestsSlice.reducer;

// This selector is also no longer used but can be used to grab an individual interest by its ID
export const selectInterestById = (state, interestId) => state.interests.find(interest => interest.id === interestId);

export const { loadInterests } = interestsSlice.actions;

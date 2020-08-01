import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { addStylesToTypes } from '../utilities/utilities';
import { fakeInterests } from '../dummy-data';

export const fetchInterests = createAsyncThunk('interests/fetchInterests', async () => {
  await fetch('http://localhost:3000');
  return addStylesToTypes(fakeInterests);
});

const interestsSlice = createSlice({
  name: 'interests',
  initialState: { interests: [], status: 'idle', error: null },
  reducers: {
    loadInterests(state, action) {
      return addStylesToTypes(action.payload);
    },
  },
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

export const selectInterestById = (state, interestId) => state.interests.find(interest => interest.id === interestId);

export const { loadInterests } = interestsSlice.actions;

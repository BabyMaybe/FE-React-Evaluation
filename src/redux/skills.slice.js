import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addStylesToTypes } from '../utilities/utilities';
import { fakeSkills } from '../dummy-data';

export const fetchSkills = createAsyncThunk('skills/fetchSkills', async () => {
  const response = await fetch('http://localhost:3000');
  return fakeSkills;
});

const skillsSlice = createSlice({
  name: 'skills',
  initialState: { skills: [], status: 'idle', error: null },
  reducers: {
    loadSkills(state, action) {
      return addStylesToTypes(action.payload);
    },
  },
  extraReducers: {
    [fetchSkills.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchSkills.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.skills = fakeSkills;
    },
    [fetchSkills.rejected]: (state, action) => {
      state.status = 'failed';
      state.skills = fakeSkills;
      state.error = action.error.message;
    },
  },
});

export default skillsSlice.reducer;
export const { loadSkills } = skillsSlice.actions;

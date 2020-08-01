import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { addStylesToTypes } from '../utilities/utilities';
import { fakeSkills } from '../dummy-data';

let endpoint;
if (process.env.NODE_ENV === 'development') {
  endpoint = 'http://localhost:3000';
} else {
  endpoint = 'https://noinc-fe-eval.herokuapp.com/home';
}

// Skills are fetched through a simulated Asynchronous Thunk.
// Regarldess of the response the dummy data is loaded into the store.
export const fetchSkills = createAsyncThunk('skills/fetchSkills', async () => {
  await fetch(endpoint);
  // Skills are also annotated with their types to make styling easier on presentation
  return addStylesToTypes(fakeSkills);
});

const skillsSlice = createSlice({
  name: 'skills',
  initialState: { skills: [], status: 'idle', error: null },
  reducers: {
    // This Action is no longer used but allowed you to directly load skills into state
    loadSkills(state, action) {
      return addStylesToTypes(action.payload);
    },
  },
  // The extra reducers handle updating the status during asynchronous loading allowing for loading and resolution screens
  extraReducers: {
    [fetchSkills.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchSkills.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.skills = action.payload;
    },
    [fetchSkills.rejected]: (state, action) => {
      state.status = 'failed';
      state.skills = action.payload;
      state.error = action.error.message;
    },
  },
});

export default skillsSlice.reducer;

// This selector is also no longer used but can be used to grab an individual skill by its ID
export const selectSkillById = (state, skillId) => state.skills.find(skill => skill.id === skillId);

export const { loadSkills } = skillsSlice.actions;

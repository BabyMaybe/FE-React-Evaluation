/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { addStylesToTypes } from '../utilities/utilities';

const skillsEndpoint = `${process.env.REACT_APP_BACKEND_URL}/skills`;

// Skills are fetched through a simulated Asynchronous Thunk
// Regarldess of the response the dummy data is loaded into the store.
export const fetchSkills = createAsyncThunk('skills/fetchSkills',
  async (data, { getState }) => {
    const auth = getState().authentication;

    const response = await fetch(skillsEndpoint, {
      method: 'GET',
      headers: { Authorization: auth.currentUser.token },
    });
    // Skills are also annotated with their types to make styling easier on presentation
    const skills = await response.json();
    return addStylesToTypes(skills);
  });

export const addSkill = createAsyncThunk('skills/add',
  async (data, { getState }) => {
    const auth = getState().authentication;
    const response = await fetch(`${skillsEndpoint}`, {
      method: 'POST',
      headers: { Authorization: auth.currentUser.token, 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.status !== 200) {
      const error = await response.json();
      throw new Error(error.message);
    }
    return response.json();
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
      state.error = action.error.message;
    },
    [addSkill.pending]: (state, action) => {
      state.status = 'loading';
    },
    [addSkill.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.skills = addStylesToTypes([...state.skills, action.payload]);
    },
    [addSkill.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default skillsSlice.reducer;

// This selector is also no longer used but can be used to grab an individual skill by its ID
export const selectSkillById = (state, skillId) => state.skills.find(skill => skill.id === skillId);

export const { loadSkills } = skillsSlice.actions;

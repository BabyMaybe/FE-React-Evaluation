import { createSlice } from '@reduxjs/toolkit';

const skillsSlice = createSlice({
  name: 'skills',
  initialState: [],
  reducers: {
    loadSkills(state, action) {
      return action.payload;
    },
  },
});

export default skillsSlice.reducer;
export const { loadSkills } = skillsSlice.actions;

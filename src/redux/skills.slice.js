import { createSlice } from '@reduxjs/toolkit';
import { addStylesToTypes } from '../utilities/utilities';

const skillsSlice = createSlice({
  name: 'skills',
  initialState: [],
  reducers: {
    loadSkills(state, action) {
      return addStylesToTypes(action.payload);
    },
  },
});

export default skillsSlice.reducer;
export const { loadSkills } = skillsSlice.actions;

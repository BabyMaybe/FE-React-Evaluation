import { createSlice } from '@reduxjs/toolkit';

const interestsSlice = createSlice({
  name: 'interests',
  initialState: [],
  reducers: {
    loadInterests(state, action) {
      return action.payload;
    },
  },
});

export default interestsSlice.reducer;
export const { loadInterests } = interestsSlice.actions;

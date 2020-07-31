import { createSlice } from '@reduxjs/toolkit';
import { addStylesToTypes } from '../utilities/utilities';

const interestsSlice = createSlice({
  name: 'interests',
  initialState: [],
  reducers: {
    loadInterests(state, action) {
      return addStylesToTypes(action.payload);
    },
  },
});

export default interestsSlice.reducer;
export const { loadInterests } = interestsSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

import { fakeSkills as initialState } from '../dummy-data';

const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
});

export default skillsSlice.reducer;

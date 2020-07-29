import { createSlice } from '@reduxjs/toolkit';

import { fakeInterests as initialState } from '../dummy-data';

const interestsSlice = createSlice({
  name: 'interests',
  initialState,
  reducers: {},
});

export default interestsSlice.reducer;

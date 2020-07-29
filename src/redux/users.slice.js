import { createSlice } from '@reduxjs/toolkit';
import { fakeUsers as initialState } from '../dummy-data';

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;

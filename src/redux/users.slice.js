import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, name: 'Eric' },
  { id: 1, name: 'Goldberry' },
  { id: 2, name: 'Bombadil' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;

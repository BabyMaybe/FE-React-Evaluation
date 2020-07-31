import { createSlice } from '@reduxjs/toolkit';

const interestsSlice = createSlice({
  name: 'interests',
  initialState: [],
  reducers: {
    loadInterests(state, action) {
      const styles = ['type-green', 'type-purple', 'type-pink'];

      const uniqueTypes = [...action.payload.reduce(
        (acc, val) => acc.add(val.type),
        new Set(),
      )];

      const interests = action.payload.map(item => ({ ...item, style: styles[uniqueTypes.indexOf(item.type)] }));

      return interests;
    },
  },
});

export default interestsSlice.reducer;
export const { loadInterests } = interestsSlice.actions;

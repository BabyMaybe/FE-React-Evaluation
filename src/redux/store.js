import { configureStore } from '@reduxjs/toolkit';

import interestsReducer from './interests.slice';
import skillsReducer from './skills.slice';
import authenticationReducer from './authentication.slice';

const store = configureStore({
  reducer: {
    interests: interestsReducer,
    skills: skillsReducer,
    authentication: authenticationReducer,
  },
});

export const selectDetail = (state, datatype, id) => {
  if (datatype === 'skills') {
    return state.skills.skills.find(skill => skill.id === id);
  } if (datatype === 'interests') {
    return state.interests.interests.find(i => i.id === id);
  }
  return {};
};

export default store;

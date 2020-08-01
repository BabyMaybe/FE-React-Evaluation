import { configureStore } from '@reduxjs/toolkit';

import interestsReducer from './interests.slice';
import skillsReducer from './skills.slice';
import authenticationReducer from './authentication.slice';

// I decided to try using the Redux Toolkit for this project since it is now the
// reccommended way of using Redux and greatly simplifies the process, but this
// was my first project with it so I was learning as I was going and may have
// some best practices to learn surrounding it

// This is the data store for the whole project and uses three slices for the interests, skills and authentication

const store = configureStore({
  reducer: {
    interests: interestsReducer,
    skills: skillsReducer,
    authentication: authenticationReducer,
  },
});

// This selector didnt seem appropriate to place in either the skills or interests slice files
// since it can pull from both so it ended up here. Having one selector allows me to use one
// Detail Page and grab the appropriate data with a smaller footprint.

export const selectDetail = (state, datatype, id) => {
  if (datatype === 'skills') {
    return state.skills.skills.find(skill => skill.id === id);
  } if (datatype === 'interests') {
    return state.interests.interests.find(i => i.id === id);
  }
  return {};
};

export default store;

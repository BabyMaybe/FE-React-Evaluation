import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './users.slice';
import interestsReducer from './interests.slice';
import skillsReducer from './skills.slice';
import authenticationReducer from './authentication.slice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    interests: interestsReducer,
    skills: skillsReducer,
    authentication: authenticationReducer,
  },
});

export default store;

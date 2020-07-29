import { configureStore } from '@reduxjs/toolkit';

import usersReducer from './users.slice';
import interestsReducer from './interests.slice';
import skillsReducer from './skills.slice';

// import { createStore, applyMiddleware, compose } from 'redux';

// import thunk from 'redux-thunk';
// import reducer from './reducers';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   reducer,
//   composeEnhancers(
//     applyMiddleware(thunk),
//   ),
// );

const store = configureStore({
  reducer: {
    users: usersReducer,
    interests: interestsReducer,
    skills: skillsReducer,
  },
});

export default store;

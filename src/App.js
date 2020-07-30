/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import LoginPage from './pages/Login/login.page';

import './App.css';
import Authenticated from './pages/Authenticated/authenticated.page';
import { userLoggedIn } from './redux/authentication.slice';

function App() {
  const userAuthenticated = useSelector(state => state.authentication.currentUser);
  const userPreviouslyAuthenticated = sessionStorage.getItem('currentUser');
  const dispatch = useDispatch();
  const isAuthenticated = userAuthenticated || userPreviouslyAuthenticated;

  // There is probably a better way to handle this but this is to accomodate
  // reloading and reading from session where the state gets cleared
  // to allow for users to maintain authentication within a session
  if (userPreviouslyAuthenticated && !userAuthenticated) {
    dispatch(userLoggedIn(userPreviouslyAuthenticated));
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/">
          {isAuthenticated ? <Authenticated /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

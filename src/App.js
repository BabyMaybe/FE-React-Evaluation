/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { userReturned } from './redux/authentication.slice';

import LoginPage from './pages/Login/login.page';
import Authenticated from './pages/Authenticated/authenticated.page';

import './App.css';

function App() {
  // const userAuthenticatedToken = useSelector(state => state.authentication.token);
  const userAuthenticated = useSelector(state => state.authentication.currentUser);
  const userToken = sessionStorage.getItem('token');
  const dispatch = useDispatch();
  const isAuthenticated = userToken || userAuthenticated;

  // There is probably a better way to handle this but this is to accomodate
  // page reloading and reads from session where the state gets cleared
  // to allow for users to maintain authentication within a session
  if (userPreviouslyAuthenticated && !userAuthenticated) {
  if (userToken && !userAuthenticated) {
    // If a user exists in session storage but not in the data store
    // it will dispatch a new Login Action and load the user into the data store
    const username = sessionStorage.getItem('username');
    dispatch(userReturned({ username, token: userToken }));
  }

  // From the top level users can only access either the Login Route
  // or the Authentiacted Route. If they are not authentiacted they are
  // redirected to the Login Page
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

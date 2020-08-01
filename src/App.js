/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { userLoggedIn } from './redux/authentication.slice';

import LoginPage from './pages/Login/login.page';
import Authenticated from './pages/Authenticated/authenticated.page';

import './App.css';

function App() {
  const userAuthenticated = useSelector(state => state.authentication.currentUser);
  const userPreviouslyAuthenticated = sessionStorage.getItem('currentUser');
  const dispatch = useDispatch();
  const isAuthenticated = userAuthenticated || userPreviouslyAuthenticated;

  // There is probably a better way to handle this but this is to accomodate
  // page reloading and reads from session where the state gets cleared
  // to allow for users to maintain authentication within a session
  if (userPreviouslyAuthenticated && !userAuthenticated) {
    // If a user exists in session storage but not in the data store
    // it will dispatch a new Login Action and load the user into the data store
    dispatch(userLoggedIn(userPreviouslyAuthenticated));
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

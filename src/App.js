/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import LoginPage from './pages/Login/login.page';

import './App.css';
import Authenticated from './pages/Authenticated/authenticated.page';

function App() {
  const userAuthenticated = useSelector(state => state.authentication.currentUser);
  const userPreviouslyAuthenticated = sessionStorage.getItem('currentUser');

  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/">
          {(userAuthenticated || userPreviouslyAuthenticated) ? <Authenticated /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

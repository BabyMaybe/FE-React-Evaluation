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
  const fakeInterests = useSelector(state => state.interests);
  const fakeSkills = useSelector(state => state.skills);
  const userAuthenticated = useSelector(state => state.authentication.currentUser);

  console.log('test return', fakeInterests);
  console.log('test return', fakeSkills);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route path="/">
          {userAuthenticated ? <Authenticated /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;

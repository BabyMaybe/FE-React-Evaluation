/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';

import {
  Route,
  Switch,
} from 'react-router-dom';

import LoginPage from './pages/Login/login.page';
import HomePage from './pages/Home/home.page';
import InterestPage from './pages/Interest/interest.page';

import './App.css';

function App() {
  const fakeInterests = useSelector(state => state.interests);
  const fakeSkills = useSelector(state => state.skills);
  console.log('test return', fakeInterests);
  console.log('test return', fakeSkills);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/interest" component={InterestPage} />
      </Switch>
    </div>
  );
}

export default App;

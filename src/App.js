/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import LoginPage from './pages/Login/login.page';
import HomePage from './pages/Home/home.page';
import InterestPage from './pages/Interest/interest.page';

import { fakeInterests, fakeSkills } from './dummy-data';

import './App.css';

function App() {
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

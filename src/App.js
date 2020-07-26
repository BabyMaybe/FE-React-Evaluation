/* eslint-disable react/jsx-filename-extension */
import React from 'react';

import LoginPage from './pages/Login/login.page';
import HeaderBar from './components/header-bar/header-bar.component';
import {
    Route,
    Switch
} from 'react-router-dom';
import {fakeInterests, fakeSkills} from "./dummy-data";

function App() {
    console.log('test return', fakeInterests);
    console.log('test return', fakeSkills);
  return (
    <div className="App">
      <p>This is App.js</p>
        <Switch>

        </Switch>
    </div>
  );
}

export default App;

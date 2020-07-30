import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderBar from '../../components/header-bar/header-bar.component';
import HomePage from '../Home/home.page';
import InterestPage from '../Interest/interest.page';

const Authenticated = () => (
  <div>
    <HeaderBar />

    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/interests" component={InterestPage} />
      <Route path="/skills" component={InterestPage} />
    </Switch>
  </div>
);

export default Authenticated;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import HeaderBar from '../../components/header-bar/header-bar.component';
import HomePage from '../Home/home.page';
import CollectionPage from '../Collection/collection.page';

import { loadInterests } from '../../redux/interests.slice';
import { loadSkills } from '../../redux/skills.slice';

import { fakeInterests, fakeSkills } from '../../dummy-data';

const Authenticated = () => {
  const dispatch = useDispatch();

  fetch('http://localhost:3000')
    .then(response => {
      // use actual response to generate interests and skills
      dispatch(loadInterests(fakeInterests));
      dispatch(loadSkills(fakeSkills));
    });

  return (
    <div>
      <HeaderBar />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/interests" component={CollectionPage} />
        <Route path="/skills" component={CollectionPage} />
      </Switch>
    </div>
  );
};

export default Authenticated;

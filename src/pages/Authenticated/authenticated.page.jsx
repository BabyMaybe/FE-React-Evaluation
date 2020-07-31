import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HeaderBar from '../../components/header-bar/header-bar.component';
import HomePage from '../Home/home.page';

import DetailPage from '../Detail/detail.page';
import { fetchSkills } from '../../redux/skills.slice';
import { fetchInterests } from '../../redux/interests.slice';

const Authenticated = () => {
  const dispatch = useDispatch();

  const skillsStatus = useSelector(state => state.skills.status);
  const interestsStatus = useSelector(state => state.interests.status);

  useEffect(() => {
    if (skillsStatus === 'idle') {
      dispatch(fetchSkills());
    }
  }, [skillsStatus, dispatch]);

  useEffect(() => {
    if (interestsStatus === 'idle') {
      dispatch(fetchInterests());
    }
  }, [interestsStatus, dispatch]);

  let content;

  if (skillsStatus === 'loading' || interestsStatus === 'loading') {
    content = <h1>LOADING...</h1>;
  } else if (skillsStatus === 'succeeded' && interestsStatus === 'succeeded') {
    content = (
      <Switch>
        <Route exact path="/interests" render={() => <HomePage showInterests />} />
        <Route exact path="/skills" render={() => <HomePage showSkills />} />
        <Route path="/skills/:id" component={DetailPage} />
        <Route path="/interests/:id" component={DetailPage} />
        <Route path="/" render={() => <HomePage showSkills showInterests />} />
      </Switch>
    );
  }

  return (
    <div>
      <HeaderBar />
      {content}
    </div>
  );
};

export default Authenticated;

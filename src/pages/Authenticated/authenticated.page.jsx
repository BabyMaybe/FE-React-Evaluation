import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import HomePage from '../Home/home.page';
import DetailPage from '../Detail/detail.page';

import HeaderBar from '../../components/header-bar/header-bar.component';

import { fetchSkills } from '../../redux/skills.slice';
import { fetchInterests } from '../../redux/interests.slice';
import AddSkillForm from '../../components/add-skill-form/add-skill-form.component';
import AddInterestForm from '../../components/add-interest-form/add-interest-form.component';

// This is an Authenticated Route page. It really only functions as a wrapper for authentication
// All child routes will require a logged in user to view.
// If a non authenticated user tries to access any child page they will be rerouted to the Login Page

// NOTE: This page was built using very Emberish (Emberonic?) patterns, where the Route and the Data Store
// are much more tightly coupled together and data fetching happens only in the Route. My instincts tell me
// React probably has different patterns or best practices around initial loads and authentication but
// I am always eager to learn more idiomatic approaches for the domains I am working in!
const Authenticated = () => {
  const dispatch = useDispatch();

  // Statuses for asynchronous requests
  const authStatus = useSelector(state => state.authentication.status);
  const skillsStatus = useSelector(state => state.skills.status);
  const interestsStatus = useSelector(state => state.interests.status);

  //  Only fetch skills on inital load
  useEffect(() => {
    if (skillsStatus === 'idle') {
      dispatch(fetchSkills());
    }
  }, [skillsStatus, authStatus, dispatch]);

  //  Only fetch interests on inital load
  useEffect(() => {
    if (interestsStatus === 'idle') {
      dispatch(fetchInterests());
    }
  }, [interestsStatus, authStatus, dispatch]);

  // Placeholder to build content for and allow for hot swapping a Loading component
  let content;

  // Right now data is guranteed to be returned but this should have actual error
  // handling built in in a more robust app
  const skillsLoaded = skillsStatus === 'succeeded' || skillsStatus === 'failed';
  const interestsLoaded = interestsStatus === 'succeeded' || interestsStatus === 'failed';

  if (skillsStatus === 'loading' || interestsStatus === 'loading') {
    // This loading screen should be razzle dazzled a little in a real app ;)
    content = <h1>LOADING...</h1>;

    // Only display actual content if all data has been loaded
  } else if (skillsLoaded && interestsLoaded) {
    content = (
      <Switch>
        <Route exact path="/interests" render={() => <HomePage showInterests />} />
        <Route exact path="/skills" render={() => <HomePage showSkills />} />
        <Route path="/skills/add" component={AddSkillForm} />
        <Route path="/interests/add" component={AddInterestForm} />
        <Route path="/skills/:id" component={DetailPage} />
        <Route path="/interests/:id" component={DetailPage} />
        <Route path="/" render={() => <HomePage showSkills showInterests />} />
      </Switch>
    );
  }

  // Always render the Header Bar and then the content
  return (
    <div>
      <HeaderBar />
      {content}
    </div>
  );
};

export default Authenticated;

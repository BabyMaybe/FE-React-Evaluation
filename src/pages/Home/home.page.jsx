import React from 'react';

import { useSelector } from 'react-redux';

import CardCarousel from '../../components/card-carousel/card-carousel.component';

import './home.styles.scss';

// This is the main page that renders any group levels of data.
// It retrieves any data currently in the store and passes that data along to the
// CardCarousel components.

// I am not in love with my solution of hard coding the two Carousels here, but
// building an arbitrarily configurable Home Page seemed like a rabbit hole when I was implementing.
// This also seemed more lightweight than building a separate page for each route so it seemed a good compromise
const HomePage = ({ showSkills, showInterests }) => {
  console.log('home page');
  const currentUser = useSelector(state => state.authentication.currentUser.username);

  const allInterests = useSelector(state => state.interests.interests);
  const allSkills = useSelector(state => state.skills.skills);

  return (
    <div className="home-page">
      <div className="page-container">

        <h1 className="welcome-header">
          {`Welcome ${currentUser}!`}
        </h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>

        {showInterests && <CardCarousel title="Interests" dataset={allInterests} />}

        {showSkills && <CardCarousel title="Skills" dataset={allSkills} />}

      </div>
    </div>
  );
};

export default HomePage;

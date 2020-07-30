import React from 'react';

import './home.styles.scss';
import { useSelector } from 'react-redux';
import CardCarousel from '../../components/card-carousel/card-carousel.component';

const HomePage = () => {
  const currentUser = useSelector(state => state.authentication.currentUser);
  const allInterests = useSelector(state => state.interests);
  const allSkills = useSelector(state => state.skills);

  return (
    <div className="home-page">
      <div className="page-container">
        <h1 className="welcome-header">
          {`Welcome ${currentUser}!`}
        </h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>

        <CardCarousel title="Interests" dataset={allInterests} />
        <CardCarousel title="Skills" dataset={allSkills} />

      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';

import './interest.styles.scss';
import HeaderBar from '../../components/header-bar/header-bar.component';

const InterestPage = () => (
  <div className="interest-page">
    <HeaderBar />
    <div className="page-container">
      <h1 className="interest-header">[INTEREST NAME]</h1>
      <div className="interest-tag">
        <span className="interest-name">[INTEREST TYPE]</span>
      </div>
      <p className="interest-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
    </div>
  </div>
);

export default InterestPage;

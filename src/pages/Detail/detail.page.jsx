import React from 'react';

import './detail.styles.scss';

const DetailPage = ({ dataset }) => {
  console.log('dataset');
  console.log(dataset);
  return (
    <div className="detail-page">
      <div className="page-container">
        <h1 className="detail-header">[detail NAME]</h1>
        <div className="detail-tag">
          <span className="detail-name">[detail TYPE]</span>
        </div>
        <p className="detail-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
      </div>
    </div>
  );
};

export default DetailPage;

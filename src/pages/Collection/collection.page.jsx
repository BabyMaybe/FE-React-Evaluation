import React from 'react';

import './collection.styles.scss';

const CollectionPage = ({ data }) => {
  console.log(data);
  return (
    <div className="collection-page">
      <div className="page-container">
        <h1 className="collection-header">[collection NAME]</h1>
        <div className="collection-tag">
          <span className="collection-name">[collection TYPE]</span>
        </div>
        <p className="collection-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
      </div>
    </div>
  );
};

export default CollectionPage;

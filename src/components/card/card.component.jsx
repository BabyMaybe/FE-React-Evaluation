import React from 'react';

import './card.styles.scss';

const Card = ({ data }) => (
  <div className="card">

    <h3 className="card-title">
      {data.name}
    </h3>

    <div className="card-field">
      <span className="field-name">NAME:</span>
      <span className="field-info">
        {data.name}
      </span>
    </div>

    <div className="card-field">
      <span className="field-name">TYPE:</span>
      <span className={`field-info field-tag ${data.style}`}>
        {data.type}
      </span>
    </div>

  </div>

);

export default Card;

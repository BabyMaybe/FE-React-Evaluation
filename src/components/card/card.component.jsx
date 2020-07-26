import React from 'react';

import './card.styles.scss';

const Card = () => (
  <div className="card">

    <h3 className="card-title">[INTEREST #]</h3>

    <div className="card-field">
      <span className="field-name">NAME:</span>
      <span className="field-info">[INTEREST NAME]</span>
    </div>

    <div className="card-field">
      <span className="field-name">TYPE:</span>
      <span className="field-info field-tag">[INTEREST TYPE]</span>
    </div>

  </div>

);

export default Card;

import React from 'react';

import './card.styles.scss';
import { Link } from 'react-router-dom';

const AddCard = ({ urlStub }) => {
  const linkUrl = `/${urlStub.toLowerCase()}/add`;

  return (
    <Link to={linkUrl} className="card">
      <span className="plus-sign">+</span>
    </Link>
  );
};

export default AddCard;

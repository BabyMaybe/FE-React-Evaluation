import React from 'react';

import './card-carousel.styles.scss';
import Card from '../card/card.component';

const CardCarousel = ({ dataset, title }) => {
  const displayItems = dataset || [];
  return (
    <div className="card-carousel-wrapper">
      <div className="card-carousel">
        <h1 className="card-carousel-title">
          {title}
        </h1>
        {displayItems.map(item => <Card data={item} urlStub={title} />)}
      </div>
    </div>
  );
};

export default CardCarousel;

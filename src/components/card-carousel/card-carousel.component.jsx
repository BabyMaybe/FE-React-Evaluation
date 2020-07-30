import React from 'react';

import './card-carousel.styles.scss';
import Card from '../card/card.component';

const CardCarousel = ({ dataset, title }) => {
  const displayItems = dataset || [];
  return (
    <div className="card-carousel-wrapper">
      <h1 className="card-carousel-title">
        {title}
      </h1>
      <div className="card-carousel">
        {
        displayItems.map(item => <Card data={item} />)
      }
      </div>
    </div>
  );
};

export default CardCarousel;

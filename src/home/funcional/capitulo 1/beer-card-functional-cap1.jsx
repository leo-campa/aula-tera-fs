import React from 'react';
import '../../beer-card-class.scss';

const BeerCardFunctionalChapter1Component = (props) => {
  return (
    <div className='-cards'>
      <div className='--none'>
        <div className='container-beerCards'>
          <img className='-image' src={props.beer?.image_url} />
          <span className='-title'>{props.beer?.name}</span>
        </div>
      </div>
    </div>
  );
};
export default BeerCardFunctionalChapter1Component;

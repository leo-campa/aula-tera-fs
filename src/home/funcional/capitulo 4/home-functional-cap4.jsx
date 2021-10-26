import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../home.scss';
import BeerCardFunctionalChapter4Component from './beer-card-functional-cap4';
import { Link } from 'react-router-dom';

const HomeFunctionalChapter4Component = () => {
  const [listBeers, setListBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers?page=1&per_page=20')
      .then((result) => setListBeers(result.data));
  }, []);

  return (
    <div>
      <Link to={'/'}>INÍCIO</Link>
      <div className='container-home'>
        <div className='-beers-container'>
          {listBeers.map((beer) => (
            <div key={beer.id} className='-cards'>
              <Link
                className='--none'
                to={{
                  pathname: `/functional/chapter4/beer-detail/${beer.id}`,
                  state: { beer },
                }}
              >
                <BeerCardFunctionalChapter4Component beer={beer} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFunctionalChapter4Component;

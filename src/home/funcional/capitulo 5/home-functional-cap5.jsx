import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../home.scss';
import BeerCardFunctionalChapter5Component from './beer-card-functional-cap5';
import { Link } from 'react-router-dom';
import { sendBeer } from '../../redux/action';
import { useDispatch } from 'react-redux';

const HomeFunctionalChapter5Component = () => {
  const [listBeers, setListBeers] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers?page=1&per_page=20')
      .then((result) => setListBeers(result.data));
  }, []);

  return (
      <div className='container-home'>
        <Link to={'/'}>INÍCIO</Link>

        <div className='-beers-container'>
          {listBeers.map((beer) => (
            <div
              key={beer.id}
              className='-cards'
              onClick={() => dispatch(sendBeer(beer))}
            >
              <Link className='--none' to={'/functional/chapter5/beer-detail'}>
                <BeerCardFunctionalChapter5Component beer={beer} />
              </Link>
            </div>
          ))}
        </div>
      </div>
  );
};

export default HomeFunctionalChapter5Component;

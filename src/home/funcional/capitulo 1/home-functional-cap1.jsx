import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../home.scss';
import { Link } from 'react-router-dom';
const HomeFunctionalChapter1Component = () => {
  const [listBeers, setListBeers] = useState([]);

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
          <div key={beer.id} className='-cards'>
            <div className='-cards'>
              <div className='--none'>
                <div className='container-beerCards'>
                  <img className='-image' src={beer?.image_url} />
                  <span className='-title'>{beer?.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomeFunctionalChapter1Component;

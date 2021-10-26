import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../home.scss';
import BeerCardFunctionalChapter2Component from './beer-card-functional-cap2';
import BeerPreviewFunctional from './beer-preview-functional';
import { Link } from 'react-router-dom';
const HomeFunctionalChapter2MemoComponent = () => {
  const [listBeers, setListBeers] = useState([]);
  const [choosenBeer, setChoosenBeer] = useState({});
  const [endMessage, setEndMessage] = useState();
  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers?page=1&per_page=20')
      .then((result) => setListBeers(result.data));
  }, []);

  const getEndComponent = () => {
    setEndMessage('Você trocou de cerveja');
  };
  useEffect(() => console.log('update'), [choosenBeer]);
  return (
    <div className='container-home'>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to={'/'}>INÍCIO</Link>
        <span>{endMessage}</span>
      </div>
      <div className='-beers-container'>
        {listBeers.map((beer) => (
          <div
            key={beer.id}
            onClick={() => setChoosenBeer(beer)}
            className='-cards'
          >
            <BeerCardFunctionalChapter2Component beer={beer} />
          </div>
        ))}
      </div>
      <div className='-choosen-beer-container'>
        <BeerPreviewFunctional
          endComponent={() => getEndComponent()}
          choosenBeer={choosenBeer}
        />
      </div>
    </div>
  );
};

export default HomeFunctionalChapter2MemoComponent;

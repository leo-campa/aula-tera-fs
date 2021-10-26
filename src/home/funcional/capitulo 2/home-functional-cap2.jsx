import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../home.scss';
import BeerCardFunctionalChapter2Component from './beer-card-functional-cap2';
import { Link } from 'react-router-dom';
const HomeFunctionalChapter2Component = () => {
  const [listBeers, setListBeers] = useState([]);
  const [choosenBeer, setChoosenBeer] = useState({});

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers?page=1&per_page=20')
      .then((result) => setListBeers(result.data));
  }, []);

  useEffect(() => console.log('update'), [choosenBeer]);

  const renderBeerPreview = () => {
    if (Object.keys(choosenBeer).length) {
      return (
        <>
          <p>
            <span className='--bold'>Você escolheu a cerveja:</span>{' '}
            {choosenBeer.name}{' '}
          </p>
          <div className='-image-choosen-container'>
            <img className='--image-choosen' src={choosenBeer.image_url} />
          </div>
          <p>
            {' '}
            <span className='--bold'>Ano de criação: </span>
            {choosenBeer.first_brewed}
          </p>
        </>
      );
    } else {
      return <p className='--bold'>Você ainda não selecionou uma cerveja</p>;
    }
  };

  return (
    <div className='container-home'>
        <Link to={'/'}>INÍCIO</Link>
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
      <div className='-choosen-beer-container'>{renderBeerPreview()}</div>
    </div>
  );
};

export default HomeFunctionalChapter2Component;

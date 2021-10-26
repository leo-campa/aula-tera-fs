import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import axios from 'axios';
import '../../home.scss';
import BeerCardFunctionalChapter2Component from './beer-card-functional-cap2';
import { Link } from 'react-router-dom';
import BeerPreviewUseContextFunctional from './beer-preview-functional-use-context';

export const beerProvider = createContext({});
const HomeFunctionalChapter2UseContextComponent = () => {
  const [listBeers, setListBeers] = useState([]);
  const [choosenBeer, setChoosenBeer] = useState({});

  useEffect(() => {
    axios
      .get('https://api.punkapi.com/v2/beers?page=1&per_page=20')
      .then((result) => setListBeers(result.data));
  }, []);

  const chooseBeer = useCallback((beer) => {
    setChoosenBeer(beer);
  }, []);

  return (
    <div className='container-home'>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link to={'/'}>INÍCIO</Link>
      </div>
      <div className='-beers-container'>
        {listBeers.map((beer) => (
          <div
            key={beer.id}
            onClick={() => chooseBeer(beer)}
            className='-cards'
          >
            <BeerCardFunctionalChapter2Component beer={beer} />
          </div>
        ))}
      </div>
      <div className='-choosen-beer-container'>
        <beerProvider.Provider value={choosenBeer}>
          <BeerPreviewUseContextFunctional />
        </beerProvider.Provider>
      </div>
    </div>
  );
};

export default HomeFunctionalChapter2UseContextComponent;

import { useEffect, useState } from 'react';
import '../../beer-detail.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const BeerDetailFunctionalChapter4Component = () => {
  const [beer, setBeer] = useState({});

  const { idBeer } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${idBeer}`)
      .then((result) => setBeer(result.data[0]));
  }, []);

  return (
    <div className='beer-detail-container'>
      <img className='-image' src={beer?.image_url} />

      <div className='-content'>
        <h1>{beer.name}</h1>

        <ul>
          <li>ABV: {beer.abv}</li>
          <li>EBC: {beer.ebc}</li>
          <li>Comidas que combinam: {beer.food_pairing?.join(', ')}</li>
        </ul>

        <div>
          <h3>Descrição</h3>
          <p>{beer.description}</p>
        </div>

        <Link to={'/functional/chapter4'}>Voltar</Link>
      </div>
    </div>
  );
};

export default BeerDetailFunctionalChapter4Component;

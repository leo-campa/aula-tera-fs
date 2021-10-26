import '../../beer-detail.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BeerDetailFunctionalChapter5Component = () => {
  const beer = useSelector((state) => state.beer);
  
  return (
    <div className='beer-detail-container'>
      <img className='-image' src={beer?.image_url} />

      <div className='-content'>
        <h1>{beer?.name}</h1>

        <ul>
          <li>ABV: {beer.abv}</li>
          <li>EBC: {beer.ebc}</li>
          <li>
            Comidas que combinam: {beer.food_pairing?.join(', ')}
          </li>
        </ul>

        <div>
          <h3>Descrição</h3>
          <p>{beer.description}</p>
        </div>

        <Link to={'/functional/chapter5'}>Voltar</Link>
      </div>
    </div>
  );
};

export default BeerDetailFunctionalChapter5Component;

import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BeerPreviewUseContextFunctional = (props) => {
  const [choosenBeer, setChoosenBeer] = useState({});
  const { idBeer } = useParams();

  useEffect(() => {
    axios
      .get(`https://api.punkapi.com/v2/beers/${idBeer}`)
      .then((result) => setChoosenBeer(result.data[0]));
  }, []);

  const renderBeerPreview = () => {
    if (Object.keys(choosenBeer).length) {
      return (
        <>
          <p>
            <span className='--bold'>Você escolheu a cerveja:</span>
            {choosenBeer.name}
          </p>
          <div className='-image-choosen-container'>
            <img className='--image-choosen' src={choosenBeer.image_url} />
          </div>
          <p>
            <span className='--bold'>Ano de criação: </span>
            {choosenBeer.first_brewed}
          </p>
        </>
      );
    } else {
      return <p className='--bold'>Você ainda não selecionou uma cerveja</p>;
    }
  };

  return renderBeerPreview();
};

export default BeerPreviewUseContextFunctional;

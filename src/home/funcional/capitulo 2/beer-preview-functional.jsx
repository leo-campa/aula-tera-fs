import { memo, useEffect } from 'react';

const BeerPreviewFunctional = (props) => {

  const renderBeerPreview = () => {
    if (Object.keys(props.choosenBeer).length) {
      return (
        <>
          <p>
            <span className='--bold'>Você escolheu a cerveja:</span>{' '}
            {props.choosenBeer.name}{' '}
          </p>
          <div className='-image-choosen-container'>
            <img
              className='--image-choosen'
              src={props.choosenBeer.image_url}
            />
          </div>
          <p>
            {' '}
            <span className='--bold'>Ano de criação: </span>
            {props.choosenBeer.first_brewed}
          </p>
        </>
      );
    } else {
      return <p className='--bold'>Você ainda não selecionou uma cerveja</p>;
    }
  };

  return renderBeerPreview();
};

const handleRender = (prev, next) => {
  return next.choosenBeer.ibu < 50;
};
export default memo(BeerPreviewFunctional, handleRender);

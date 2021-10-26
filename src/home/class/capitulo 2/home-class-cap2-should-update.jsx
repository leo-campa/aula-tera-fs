import React, { Component } from 'react';
import axios from 'axios';
import '../../home.scss';
import BeerCardClassChapter2Component from './beer-card-class-cap2';
import { Link } from 'react-router-dom';

class HomeClassChapter2ShouldUpdateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { listBeers: [], choosenBeer: {} };
  }

  beerPreview;
  componentDidMount() {
    axios
      .get('https://api.punkapi.com/v2/beers?page=1&per_page=20')
      .then((result) => this.setState({ listBeers: result.data }));
  }

  componentDidUpdate(prevProps, nextProps) {
    console.log('update');
  }

  shouldComponentUpdate(prevProps, nextProps) {
    console.log('should', prevProps, nextProps, nextProps.choosenBeer.ibu < 50);

    return (
      !Boolean(Object.keys(nextProps.choosenBeer).length) ||
      nextProps.choosenBeer.ibu < 50
    );
  }
  render() {
    if (Object.keys(this.state.choosenBeer).length) {
      this.beerPreview = (
        <>
          <p>
            <span className='--bold'>Você escolheu a cerveja:</span>{' '}
            {this.state.choosenBeer.name}{' '}
          </p>
          <div className='-image-choosen-container'>
            <img
              className='--image-choosen'
              src={this.state.choosenBeer.image_url}
            />
          </div>
          <p>
            {' '}
            <span className='--bold'>Ano de criação: </span>
            {this.state.choosenBeer.first_brewed}
          </p>
        </>
      );
    } else {
      this.beerPreview = (
        <p className='--bold'>Você ainda não selecionou uma cerveja</p>
      );
    }
    return (
      <div className='container-home'>
        <Link to={'/'}>INÍCIO</Link>
        <div className='-beers-container'>
          {this.state.listBeers.map((beer) => (
            <div
              key={beer.id}
              onClick={() => this.setState({ choosenBeer: beer })}
              className='-cards'
            >
              <BeerCardClassChapter2Component beer={beer} />
            </div>
          ))}
        </div>
        <div className='-choosen-beer-container'>{this.beerPreview}</div>
      </div>
    );
  }
}

export default HomeClassChapter2ShouldUpdateComponent;

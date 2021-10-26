import React, { Component } from 'react';
import axios from 'axios';
import '../../home.scss';
import BeerCardClassChapter4Component from './beer-card-class-cap4';
import { Link } from 'react-router-dom';

class HomeClassChapter4Component extends Component {
  constructor(props) {
    super(props);
    this.state = { listBeers: [], choosenBeer: {} };
  }

  componentDidMount() {
    axios
      .get('https://api.punkapi.com/v2/beers?page=1&per_page=20')
      .then((result) => this.setState({ listBeers: result.data }));
  }

  render() {
    return (
      <div className='container-home'>
          <Link to={'/'}>INÍCIO</Link>
        <div className='-beers-container'>
          {this.state.listBeers.map((beer) => (
            <div key={beer.id} className='-cards'>
              <Link
                className='--none'
                to={{
                  pathname: `/class/chapter4/beer-detail/${beer.id}`,
                  state: { beer },
                }}
              >
                <BeerCardClassChapter4Component beer={beer} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default HomeClassChapter4Component;

import React, { Component } from 'react';
import axios from 'axios';
import '../../home.scss';
import BeerCardClassChapter5Component from './beer-card-class-cap5';
import { Link } from 'react-router-dom';
import { sendBeer } from '../../redux/action';
import { connect } from 'react-redux';

class HomeClassChapter5Component extends Component {
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
                to={'/class/chapter5/beer-detail'}
                onClick={() => this.props.sendBeer(beer)}
              >
                <BeerCardClassChapter5Component beer={beer} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = {
  sendBeer,
};
export default connect(null, mapDispatchToProps)(HomeClassChapter5Component);

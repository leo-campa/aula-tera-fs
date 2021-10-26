import { Component } from 'react';
import '../../beer-detail.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

class BeerDetailClassChapter4Component extends Component {

  constructor(props) {
    super(props);
    this.state = { beer: {} };
  }

  componentDidMount() {
    axios
      .get(`https://api.punkapi.com/v2/beers/${this.props.idBeer}`)
      .then((result) => this.setState({ beer: result.data[0] }));
  }


  render() {
    return (
      <div className='beer-detail-container'>
        <img className='-image' src={this.props.beer?.image_url} />

        <div className='-content'>
          <h1>{this.props.beer.name}</h1>

          <ul>
            <li>ABV: {this.props.beer.abv}</li>
            <li>EBC: {this.props.beer.ebc}</li>
            <li>
              Comidas que combinam: {this.props.beer.food_pairing.join(', ')}
            </li>
          </ul>

          <div>
            <h3>Descrição</h3>
            <p>{this.props.beer.description}</p>
          </div>

          <Link to={'/class/chapter4'}>Voltar</Link>
        </div>
      </div>
    );
  }
}

export default BeerDetailClassChapter4Component;

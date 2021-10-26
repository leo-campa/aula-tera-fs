import { Component } from 'react';
import '../../beer-detail.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class BeerDetailClassChapter5Component extends Component {
  render() {
    return (
      <div className='beer-detail-container'>
        <img className='-image' src={this.props?.beer?.image_url} />

        <div className='-content'>
          <h1>{this.props?.beer?.name}</h1>

          <ul>
            <li>ABV: {this.props?.beer.abv}</li>
            <li>EBC: {this.props?.beer.ebc}</li>
            <li>
              Comidas que combinam:{' '}
              {this.props?.beer.food_pairing?.join(', ')}
            </li>
          </ul>

          <div>
            <h3>Descrição</h3>
            <p>{this.props?.beer.description}</p>
          </div>

          <Link to={'/class/chapter5'}>Voltar</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  beer: state.beer,
});

export default connect(mapStateToProps, null)(BeerDetailClassChapter5Component);

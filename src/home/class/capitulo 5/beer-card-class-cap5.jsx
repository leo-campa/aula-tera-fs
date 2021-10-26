import { Component } from 'react';
import '../../beer-card-class.scss'
class BeerCardClassChapter4Component extends Component {
    render() {

    return (
      <div className='-cards'>
        <div className='--none'>
          <div className='container-beerCards'>
            <img className='-image' src={this.props.beer?.image_url} />
            <span className='-title'>{this.props.beer?.name}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default BeerCardClassChapter4Component
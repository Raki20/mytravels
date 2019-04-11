import React, {Component} from 'react';

class Travel extends Component {
    render() {
        const { destination, country, photo, distance } = this.props;
        return (
            <div>
                <p>{destination}</p>
                <p>{country}</p>
                <img src= {photo} alt={destination}/>
                <p>{distance}</p>
            </div>
            )
            }
}
export default Travel;
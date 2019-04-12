import React, {Component} from 'react';


class Travel extends Component {
    render() {
        const { destination, country, image, distance } = this.props;
        return (
            <div>
                <p>{destination}</p>
                <p>{country}</p>
                <img src= {image} alt={destination}/>
                <p>{distance}</p>
            </div>
            )
            }
}
export default Travel;
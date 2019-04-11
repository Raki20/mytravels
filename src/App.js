import React, { Component } from 'react';
import './App.css';
import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div>
      <Travel
        destination="Lisbon"
        country="Portugal"
        photo="https://www.aworldtotravel.com/wp-content/uploads/2017/07/baixa-and-castle-things-lisbon-is-famous-for-a-world-to-travel.jpg"
        distance="2000 miles"
      />
      <Travel
        destination="Paris"
        country="France"
        photo="https://kids.nationalgeographic.com/content/dam/kids/photos/Countries/A-G/france-eiffel-tower.ngsversion.1396531559251.adapt.1900.1.jpg"
        distance="3500 miles"
      />
    </div>
    );
  }
}

export default App;
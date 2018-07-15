import React, { Component } from 'react';
import GuestList from './Components/GuestList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      guests: [
        {
          name: "Maximo Mena",
          address: {
            l1: "2505 E Williams Field Rd",
            l2: "Apt 3076",
            city: "Gilbert",
            state: "AZ",
            zipcode: "85295"
          },
          isConfirmed: true,
          headcount: 2
        },
        {
          name: "Maximo Mena",
          address: {
            l1: "2505 E Williams Field Rd",
            l2: "Apt 3076",
            city: "Gilbert",
            state: "AZ",
            zipcode: "85295"
          },
          isConfirmed: false,
          headcount: 0
        }
      ]
    }
  }
  render() {
    return (
      <div className="content-wrapper">
        <GuestList
          guests={this.state.guests}
         />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import GuestList from './Components/GuestList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      editing: "xw1",
      guests: [
        {
          id: "xw1",
          name: "Maximo Mena",
          isConfirmed: true,
          guests: 2,
          address: {
            l1: "2505 E Williams Field Rd",
            l2: "Apt 3076",
            city: "Gilbert",
            state: "AZ",
            zipcode: "85295"
          }
        },
        {
          id: "xw2",
          name: "Natalie Chagoya",
          isConfirmed: false,
          guests: 0,
          address: {
            l1: "2505 E Williams Field Rd",
            l2: "Apt 3076",
            city: "Gilbert",
            state: "AZ",
            zipcode: "85295"
          }
        }
      ]
    }
  }
  render() {
    return (
      <div className="content-wrapper">
        <GuestList
          guests={this.state.guests}
          editing={this.state.editing}
         />
      </div>
    );
  }
}

export default App;

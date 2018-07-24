import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';
import GuestList from './Components/GuestList';
import NewGuest from './Components/NewGuest';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      newGuest: '',
      editGuestData: {},
      guests: []
    }
  }

  getGuestDefaultData = () => {
    return {
      id: "",
      name: "",
      isConfirmed: false,
      guests: 0,
      address: {
        l1: "",
        l2: "",
        city: "",
        state: "",
        zipcode: ""
      }
    };
  }

  handleNewGuestName = (name) =>
    this.setState({
      newGuest: name
    });

  handleGuestName = (name, id) =>
    this.updateGuestData('name', name, id);

  handleGuestRsvp = (rsvp, id) =>
    this.updateGuestData('isConfirmed', rsvp, id);

  handleGuestGuests = (guests, id) =>
    this.updateGuestData('guests', guests, id);

  handleAddressL1 = (l1, id) =>
    this.updateGuestAddress('l1', l1, id);

  handleAddressL2 = (l2, id) =>
    this.updateGuestAddress('l2', l2, id);

  handleAddressCity = (city, id) =>
    this.updateGuestAddress('city', city, id);

  handleAddressState = (state, id) =>
    this.updateGuestAddress('state', state, id);

  handleAddressZipcode = (zipcode, id) =>
    this.updateGuestAddress('zipcode', zipcode, id);

  updateGuestAddress = (attribute, value, id) => {
    let guest = this.state.guests.filter(guest => guest.id === id)
    let address = {};

    // Get current address.
    if (guest.length > 0) {
      address = {
        ...guest[0].address
      }
    }

    // Combine old address with data in editGuestData.
    if (this.state.editGuestData[id] && ('address' in this.state.editGuestData[id])) {
      address = {
        ...address,
        ...this.state.editGuestData[id].address
      };
    }

    // Update address field.
    address = {
        ...address,
        [attribute]: value
    }

    this.updateGuestData('address', address, id);
  }

  updateGuestData = (attribute, value, id) => {
    let guestData = {
      ...this.state.editGuestData[id],
      [attribute]: value
    };
    this.setState({
      editGuestData: {
        ...this.state.editGuestData,
        [id]: guestData
      }
    });
  }

  handleAddGuest = (e) => {
    e.preventDefault();
    let newGuest = this.getGuestDefaultData();
    newGuest.id = Math.random().toString(36).substr(2, 9);
    newGuest.name = this.state.newGuest;

    this.setState({
      guests: [
        newGuest,
        ...this.state.guests
      ],
      newGuest: ''
    });
  }
  
  handleUpdateGuest = (e, id) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (guest.id === id) {
          return {
            ...guest,
            ...this.state.editGuestData[id]
          }
        }
        return guest;
      }),
      editGuestData: {
        ...this.state.editGuestData,
        [id]: {}
      }
    });

    return true;
  }

  render() {
    return (
      <div className="content-wrapper">
        <Tile>
          <NewGuest
            name={this.state.newGuest}
            handleNewGuestName={e => this.handleNewGuestName(e.target.value)}
            handleAddGuest={e => this.handleAddGuest(e)}
          />
        </Tile>
        <GuestList
          guests={this.state.guests}
          handleGuestName={this.handleGuestName}
          handleGuestRsvp={this.handleGuestRsvp}
          handleGuestGuests={this.handleGuestGuests}
          handleAddressL1={this.handleAddressL1}
          handleAddressL2={this.handleAddressL2}
          handleAddressCity={this.handleAddressCity}
          handleAddressState={this.handleAddressState}
          handleAddressZipcode={this.handleAddressZipcode}
          handleUpdateGuest={this.handleUpdateGuest}
         />
      </div>
    );
  }
}

export default App;

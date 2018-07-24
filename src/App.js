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

  handleAddressL1 = (l1) =>
    this.updateGuestAddress('l1', l1);

  handleAddressL2 = (l2) =>
    this.updateGuestAddress('l2', l2);

  handleAddressCity = (city) =>
    this.updateGuestAddress('city', city);

  handleAddressState = (state) =>
    this.updateGuestAddress('state', state);

  handleAddressZipcode = (zipcode) =>
    this.updateGuestAddress('zipcode', zipcode);

  updateGuestAddress = (attribute, value) => 
    this.setState({
      editGuestData: {
        address: {
          ...this.state.editGuestData.address,
          [attribute]: value
        }
      }
    });

  updateGuestData = (attribute, value, id) => 
    this.setState({
      editGuestData: {
        ...this.state.editGuestData,
        id: id, 
        [attribute]: value
      }
    });

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
            ...this.state.editGuestData
          }
        }
        return guest;
      }),
      editGuestData: {}
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

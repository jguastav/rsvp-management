import React, { Component } from 'react';
import { Tile } from 'carbon-components-react';
import firebase from './firebase.js';
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

  componentDidMount() {
    firebase.database().ref('guests').on('value', (snapshot) => {
      let guests = [];
      let defaultData = this.getGuestDefaultData();

      snapshot.forEach(guest => {
        guests.push({
          ...defaultData,
          ...guest.val(),
          id: guest.key
        });
      });

      this.setState({
        guests: guests
      });
    });
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

    firebase.database().ref('guests').push({
      name: this.state.newGuest
    });

    this.setState({
      newGuest: ''
    });
  }
  
  handleUpdateGuest = (e, id) => {
    // Find guest.
    let guest2update = this.state.guests.find(guest => {
      return guest.id === id; 
    });

    // Abort if no guest is found.
    if (!guest2update) {
      return false;
    }

    // Update guest on firebase.
    firebase.database().ref(`/guests/${id}`).set({
      ...guest2update,
      ...this.state.editGuestData[id]
    });

    // Clear editGuestData.
    this.setState({
      editGuestData: {
        ...this.state.editGuestData,
        [id]: {}
      }
    });

    return true;
  }

  handleRemoveGuest = (e, id) => {

    firebase.database().ref(`/guests/${id}`).remove();

    // Remove guest from editGuestData.
    const { [id]: value, ...newGuests} = this.state.editGuestData;
    this.setState({
      editGuestData: newGuests
    });

    return true;
  }

  getInvitedGuestCount = () => {
    if (!this.state.guests) {
      return 0;
    }

    return this.state.guests.reduce((accumulator, guest) =>
      accumulator + 1 + guest.guests,
    0); 
  }

  getConfirmedGuestCount = () => {
    if (!this.state.guests) {
      return 0;
    }

    return this.state.guests.reduce((accumulator, guest) =>
      accumulator + (guest.isConfirmed ? (1 + guest.guests) : 0),
     0); 
  }

  render() {
    return (
      <div className="app">
        <div className="app__meta">
          <Tile>
            <h1 className="app__title">Wedding Guest List</h1> 
            <NewGuest
              name={this.state.newGuest}
              handleNewGuestName={e => this.handleNewGuestName(e.target.value)}
              handleAddGuest={e => this.handleAddGuest(e)}
            />
            <div className="app__stats">
              <div className="bx--grid">
                <div className="bx--row">
                  <div className="bx--col-xs-6">
                    <div className="app__invited"><strong>Invited Guests:</strong> {this.getInvitedGuestCount()}</div>
                  </div>
                  <div className="bx--col-xs-6 ">
                    <div className="app__confirmed"><strong>Confirmed Guests:</strong> {this.getConfirmedGuestCount()}</div>
                  </div>
                </div>
              </div>
            </div>
          </Tile>
        </div>
        <div className="app__guest-list">
          <GuestList
            guests={this.state.guests}
            newGuest={this.state.newGuest}
            handleGuestName={this.handleGuestName}
            handleGuestRsvp={this.handleGuestRsvp}
            handleGuestGuests={this.handleGuestGuests}
            handleAddressL1={this.handleAddressL1}
            handleAddressL2={this.handleAddressL2}
            handleAddressCity={this.handleAddressCity}
            handleAddressState={this.handleAddressState}
            handleAddressZipcode={this.handleAddressZipcode}
            handleUpdateGuest={this.handleUpdateGuest}
            handleRemoveGuest={this.handleRemoveGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;

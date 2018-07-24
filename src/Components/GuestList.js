import React from 'react';
import PropTypes from 'prop-types';
import Guest from './Guest';
import './GuestList.css';

const GuestList = props => (
  <ul className="guest-list">
    {props.guests.map(guest =>
      <li key={guest.id} className="guest-list__item">
        <Guest
          id={guest.id}
          name={guest.name}
          address={guest.address}
          isConfirmed={guest.isConfirmed}
          guests={guest.guests}
          handleGuestName={name => props.handleGuestName(name, guest.id)}
          handleGuestRsvp={rsvp => props.handleGuestRsvp(rsvp, guest.id)}
          handleGuestGuests={guests => props.handleGuestGuests(guests, guest.id)}
          handleAddressL1={l1 => props.handleAddressL1(l1, guest.id)}
          handleAddressL2={l2 => props.handleAddressL2(l2, guest.id)}
          handleAddressCity={city => props.handleAddressCity(city, guest.id)}
          handleAddressState={state => props.handleAddressState(state, guest.id)}
          handleAddressZipcode={zipcode => props.handleAddressZipcode(zipcode, guest.id)}
          handleUpdateGuest={(e) => props.handleUpdateGuest(e, guest.id)}
          handleRemoveGuest={(e) => props.handleRemoveGuest(e, guest.id)}
        />
      </li>
    )}
  </ul>
);

GuestList.propTypes = {
  guests: PropTypes.array.isRequired,
  handleGuestName: PropTypes.func.isRequired,
  handleGuestRsvp: PropTypes.func.isRequired,
  handleGuestGuests: PropTypes.func.isRequired,
  handleAddressL1: PropTypes.func.isRequired,
  handleAddressL2: PropTypes.func.isRequired,
  handleAddressCity: PropTypes.func.isRequired,
  handleAddressState: PropTypes.func.isRequired,
  handleAddressZipcode: PropTypes.func.isRequired,
  handleUpdateGuest: PropTypes.func.isRequired,
  handleRemoveGuest: PropTypes.func.isRequired
}

export default GuestList;

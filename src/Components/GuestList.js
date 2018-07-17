import React from 'react';
import PropTypes from 'prop-types';
// import { ExpandableTile } from 'carbon-components-react';
import Guest from './Guest';

const Guests = props => (
  <ul>
    {props.guests.map(guest =>
      <li key={guest.id}>
        <Guest
          id={guest.id}
          name={guest.name}
          address={guest.address}
          isConfirmed={guest.isConfirmed}
          guests={guest.guests}
          handleGuestName={name => props.handleGuestName(name, guest.id)}
          handleGuestRsvp={rsvp => props.handleGuestRsvp(rsvp, guest.id)}
          handleGuestGuests={guests => props.handleGuestGuests(guests, guest.id)}
          handleAddressL1={l1 => props.handleAddressL1(l1)}
          handleAddressL2={l2 => props.handleAddressL2(l2)}
          handleAddressCity={city => props.handleAddressCity(city)}
          handleAddressState={state => props.handleAddressState(state)}
          handleAddressZipcode={zipcode => props.handleAddressZipcode(zipcode)}
          handleUpdateGuest={(e) => props.handleUpdateGuest(e, guest.id)}
        />
      </li>
    )}
  </ul>
);

Guests.propTypes = {
  guests: PropTypes.array.isRequired,
  handleGuestName: PropTypes.func.isRequired,
  handleGuestRsvp: PropTypes.func.isRequired,
  handleGuestGuests: PropTypes.func.isRequired,
  handleAddressL1: PropTypes.func.isRequired,
  handleAddressL2: PropTypes.func.isRequired,
  handleAddressCity: PropTypes.func.isRequired,
  handleAddressState: PropTypes.func.isRequired,
  handleAddressZipcode: PropTypes.func.isRequired,
  handleUpdateGuest: PropTypes.func.isRequired
}

export default Guests;

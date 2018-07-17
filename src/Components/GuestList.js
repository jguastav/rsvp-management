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
  handleUpdateGuest: PropTypes.func.isRequired
}

export default Guests;

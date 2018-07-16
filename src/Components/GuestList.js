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
          isEditing={props.editing === guest.id}
        />
      </li>
    )}
  </ul>
);

Guests.propTypes = {
  guests: PropTypes.array.isRequired,
  editing: PropTypes.string.isRequired
}

export default Guests;

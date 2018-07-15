import React from 'react';
import PropTypes from 'prop-types';
// import { ExpandableTile } from 'carbon-components-react';
import Guest from './Guest';

const Guests = props => (
  <ul>
    {props.guests.map(guest =>
      <li>
        <Guest
          name={guest.name}
          address={guest.address}
          isConfirmed={guest.isConfirmed}
          headcount={guest.headcount}
          isEditing={false}
        />
      </li>
    )}
  </ul>
);

Guests.propTypes = {
  guests: PropTypes.array.isRequired,
}

export default Guests;

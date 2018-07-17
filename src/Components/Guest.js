import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from 'carbon-components-react';
import { ModalWrapper } from 'carbon-components-react';
import Address from './Address';
import EditGuest from './EditGuest';
import './Guest.css';

const Guest = props => (
  <div className="guest">
    <Tile>
      <h3 className="guest__name">{props.name}</h3>
      <div className="guest__meta">
        <span className={"guest__rsvp" + (props.isConfirmed ? " guest__rsvp--yes" : "")}>{props.isConfirmed ? 'Confirmed' : 'Not Confirmed'}</span>
        <span className="guest__guests">+{props.guests}</span>
      </div>
      <div className="guest__address">
        <Address
          l1={props.address.l1}
          l2={props.address.l2}
          city={props.address.city}
          state={props.address.state}
          zipcode={props.address.zipcode}
        />
      </div>
      <div className="guest__edit">
        <ModalWrapper
          id="edit-guest-modal"
          buttonTriggerText="Edit"
          modalHeading={"Edit " + props.name}
          handleSubmit={e => props.handleUpdateGuest(e)}
          shouldCloseAfterSubmit
        >
          <EditGuest
            id={props.id}
            name={props.name}
            address={props.address}
            isConfirmed={props.isConfirmed}
            guests={props.guests}
            handleGuestName={e => props.handleGuestName(e.target.value)}
            handleGuestRsvp={e => props.handleGuestRsvp(e.target.value)}
            handleGuestGuests={e => props.handleGuestGuests(Number(e.imaginaryTarget.value))}
          />
        </ModalWrapper>
      </div>
    </Tile>
  </div>
);

Guest.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  guests: PropTypes.number.isRequired,
  address: PropTypes.object.isRequired,
  handleGuestName: PropTypes.func.isRequired,
  handleGuestRsvp: PropTypes.func.isRequired,
  handleGuestGuests: PropTypes.func.isRequired,
  handleUpdateGuest: PropTypes.func.isRequired
}

export default Guest;

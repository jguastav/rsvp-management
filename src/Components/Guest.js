import React from 'react';
import PropTypes from 'prop-types';
import { ExpandableTile } from 'carbon-components-react';
import { TileAboveTheFoldContent } from 'carbon-components-react';
import { TileBelowTheFoldContent } from 'carbon-components-react';
import Address from './Address';
import './Guest.css';

const Guest = props => (
  <div className="guest-wrapper">
    {(props.isEditing) ?
      <div className="edit-guest">
      </div>
    :
      <div className="guest">
        <ExpandableTile>
          <TileAboveTheFoldContent>
            <h3 className="guest__name">{props.name}</h3>
            <div className="guest__meta">
              <span className={"guest__rsvp" + (props.isConfirmed ? " guest__rsvp--yes" : "")}>{props.isConfirmed ? 'Confirmed' : 'Not Confirmed'}</span>
              <span className="guest__headcount">+{props.headcount}</span>
            </div>
          </TileAboveTheFoldContent>
          <TileBelowTheFoldContent>
            <div className="guest__address">
              <Address
                l1={props.address.l1}
                l2={props.address.l2}
                city={props.address.city}
                state={props.address.state}
                zipcode={props.address.zipcode}
              />
            </div>
          </TileBelowTheFoldContent>
        </ExpandableTile>
      </div>
  }
  </div>
);

Guest.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  headcount: PropTypes.number.isRequired,
  isEditing: PropTypes.bool.isRequired
}

export default Guest;

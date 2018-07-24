import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'carbon-components-react';
import { FormGroup } from 'carbon-components-react';
import { TextInput } from 'carbon-components-react';
import { NumberInput } from 'carbon-components-react';
import { Toggle} from 'carbon-components-react';
import './EditGuest.css';

const EditGuest = props => (
  <div className="edit-guest">
    <Form className="edit-guest__form">
      <FormGroup className="edit-guest__name-wrapper" legendText="Guest Name">
        <TextInput
          labelText=""
          className="edit-guest__name"
          id={"guest-" + props.id + "-name"}
          defaultValue={props.name}
          onChange={props.handleGuestName}
        />
      </FormGroup>
      <FormGroup className="edit-guest__rsvp-wrapper" legendText="RSVP">
        <Toggle
          className="edit-guest__rsvp"
          id={"guest-" + props.id + "-rsvp"}
          labelA="No"
          labelB="Yes"
          onToggle={props.handleGuestRsvp}
          defaultToggled={props.isConfirmed}
        />
        <NumberInput
          className="edit-guest__guests"
          id={"guest-" + props.id + "-guests"}
          label="Additional Guests"
          min={0}
          max={4}
          value={props.guests}
          step={1}
          invalidText="Must be a number between 0 and 4."
          onChange={props.handleGuestGuests}
        />
      </FormGroup>
      <FormGroup className="edit-address" legendText="Address">
        <TextInput
          labelText="Line 1"
          className="edit-address__l1"
          id={"address-" + props.id + "-l1"}
          defaultValue={props.address.l1 || ''}
          onChange={props.handleAddressL1}
        />
        <TextInput
          labelText="Line 2"
          className="edit-address__l2"
          id={"address-" + props.id + "-l2"}
          defaultValue={props.address.l2 || ''}
          onChange={props.handleAddressL2}
        />
        <TextInput
          labelText="City"
          className="edit-address__city"
          id={"address-" + props.id + "-city"}
          defaultValue={props.address.city || ''}
          onChange={props.handleAddressCity}
        />
        <TextInput
          labelText="State"
          className="edit-address__state"
          id={"address-" + props.id + "-state"}
          defaultValue={props.address.state || ''}
          onChange={props.handleAddressState}
        />
        <TextInput
          labelText="Zipcode"
          className="edit-address__zipcode"
          id={"address-" + props.id + "-zipcode"}
          defaultValue={props.address.zipcode || ''}
          onChange={props.handleAddressZipcode}
        />
      </FormGroup>
    </Form>
  </div>
);

EditGuest.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  guests: PropTypes.number.isRequired,
  address: PropTypes.object.isRequired,
  handleGuestName: PropTypes.func.isRequired,
  handleGuestRsvp: PropTypes.func.isRequired,
  handleGuestGuests: PropTypes.func.isRequired,
  handleAddressL1: PropTypes.func.isRequired,
  handleAddressL2: PropTypes.func.isRequired,
  handleAddressCity: PropTypes.func.isRequired,
  handleAddressState: PropTypes.func.isRequired,
  handleAddressZipcode: PropTypes.func.isRequired,
}

export default EditGuest;

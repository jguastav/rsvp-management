import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from 'carbon-components-react';
import { Form } from 'carbon-components-react';
import { FormGroup } from 'carbon-components-react';
import { TextInput } from 'carbon-components-react';
import { NumberInput } from 'carbon-components-react';
import { Toggle} from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import Address from './Address';
import './Guest.css';

const Guest = props => (
  <div className="guest-wrapper">
    {(props.isEditing) ?
    // Move Editing form to App.js. Load form in a modal. Save values in a temporary object, in state. Update guest info on form submission.
      <div className="edit-guest">
        <Tile>
          <Form className="edit-guest__form" onSubmit={false}>
            <FormGroup className="edit-guest__name-wrapper" legendText="Guest Name">
              <TextInput
                className="edit-guest__name"
                id={"guest-" + props.id + "-name"}
                defaultValue={props.name}
              />
            </FormGroup>
            <FormGroup className="edit-guest__rsvp-wrapper" legendText="RSVP">
              <Toggle
                className="edit-guest__rsvp"
                id={"guest-" + props.id + "-rsvp"}
                labelA="No"
                labelB="Yes"
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
              />
            </FormGroup>
            <FormGroup className="edit-address" legendText="Address">
              <TextInput
                labelText="Line 1"
                className="edit-address__l1"
                id={"address-" + props.id + "-l1"}
                defaultValue={props.address.l1}
              />
              <TextInput
                labelText="Line 2"
                className="edit-address__l2"
                id={"address-" + props.id + "-l2"}
                defaultValue={props.address.l2}
              />
              <TextInput
                labelText="City"
                className="edit-address__city"
                id={"address-" + props.id + "-city"}
                defaultValue={props.address.city}
              />
              <TextInput
                labelText="State"
                className="edit-address__state"
                id={"address-" + props.id + "-state"}
                defaultValue={props.address.state}
              />
              <TextInput
                labelText="Zipcode"
                className="edit-address__zipcode"
                id={"address-" + props.id + "-zipcode"}
                defaultValue={props.address.zipcode}
              />

            </FormGroup>
            <Button type="submit" className="some-class">Update</Button>
          </Form>
        </Tile>
      </div>
    :
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
        </Tile>
      </div>
  }
  </div>
);

Guest.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isConfirmed: PropTypes.bool.isRequired,
  guests: PropTypes.number.isRequired,
  address: PropTypes.object.isRequired,
  isEditing: PropTypes.bool.isRequired
}

export default Guest;

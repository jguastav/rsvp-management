import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'carbon-components-react';
import { FormGroup } from 'carbon-components-react';
import { Button } from 'carbon-components-react';
import { TextInput } from 'carbon-components-react';
import './NewGuest.css';

const NewGuest = props => (
  <div className="new-guest">
    <Form className="new-guest__form" onSubmit={e => props.handleAddGuest(e)}>
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-xs-9 ">
            <TextInput
              labelText=""
              placeholder="Invite someone"
              className="new-guest__name"
              id="new-guest-name"
              value={props.name}
              onChange={props.handleNewGuestName}
            />
          </div>
          <div className="bx--col-xs-3">
            <Button type="submit" className="new-guest__submit">
              Add Guest
            </Button>
          </div>
        </div>
      </div>
    </Form>
  </div>
);

NewGuest.propTypes = {
  name: PropTypes.string.isRequired,
  handleNewGuestName: PropTypes.func.isRequired,
  handleAddGuest: PropTypes.func.isRequired,
}

export default NewGuest;

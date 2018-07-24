import React from 'react';
import PropTypes from 'prop-types';
import './Address.css';

const Address = props => (
  <div className="address">
    {/* <h4>Address</h4> */}
    <div className="address__l1">{props.address.l1 || ''}</div>
    <div className="address__l2">{props.address.l2 || ''}</div>
    <div className="address__l3">{props.address.city ? props.address.city + ", " : ""}{props.address.state ? props.address.state + " " : ""}{props.address.zipcode || ''}</div>
  </div>
);

Address.propTypes = {
  address: PropTypes.object.isRequired
}

export default Address;

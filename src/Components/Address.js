import React from 'react';
import PropTypes from 'prop-types';
import './Address.css';

const Address = props => (
  <div className="address">
    <h4>Address</h4>
    <div className="address__l1">{props.l1}</div>
    <div className="address__l2">{props.l2}</div>
    <div className="address__l3">{props.city ? props.city + ", " : ""}{props.state ? props.state + " " : ""}{props.zipcode}</div>
  </div>
);

Address.propTypes = {
  l1: PropTypes.string.isRequired,
  l2: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired
}

export default Address;

// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';
import React from 'react';

const Crypto = ({
  img, name, price, priceChange,
}) => (
  <div>
    <img src={img} alt="Crypto Currency" />
    Name:
    {name}
    Price:
    {price}
    Price Change:
    {priceChange}
  </div>
);

Crypto.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceChange: PropTypes.number.isRequired,
};

export default Crypto;

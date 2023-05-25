// eslint-disable-next-line import/no-extraneous-dependencies
import { PropTypes } from 'prop-types';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import crypto from '../styles/Crypto.module.css';

const Crypto = ({
  img, name, price, priceChange, symbol,
}) => (
  <div>
    <div className={crypto.cryptoArrow}>
      <FaArrowAltCircleRight />
    </div>
    <div className={crypto.cryptoLogoContainer}>
      <img src={img} alt="Crypto-Logo" className={crypto.cryptoLogo} />
    </div>
    <div className={crypto.cryptoCardContainer}>
      <div className={crypto.Left}>
        <p className={crypto.text}>
          {name}
        </p>
        <p className={crypto.text}>
          {symbol}
        </p>
      </div>
      <div className={crypto.Right}>
        <p className={crypto.text}>
          {price}
        </p>
        <p className={crypto.text}>
          {priceChange}
        </p>
      </div>
    </div>
  </div>
);

Crypto.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceChange: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Crypto;

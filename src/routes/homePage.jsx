/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as cryptoID } from 'uuid';
import { useNavigate } from 'react-router';
import { getCrypto } from '../redux/cryptoSlice/cryptoSlice';
import Crypto from '../components/cryptoCurrency/Crypto';

const HomePage = () => {
  const fetchStatus = useRef(true);
  const { cryptoArray } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [cryptoSearched, setCryptoSearched] = useState('');

  useEffect(() => {
    if (fetchStatus.current) {
      fetchStatus.current = false;
      dispatch(getCrypto());
    }
  }, []);

  const handleClick = (item) => {
    if (item.id) {
      navigate(`details/${item.id}`);
    }
  };

  const filterArray = cryptoArray ? cryptoArray.filter((item) => {
    if (cryptoSearched === '') {
      return item;
    }

    if (item.name.toLowerCase().includes(cryptoSearched.toLowerCase())) {
      return item;
    }

    return null;
  }) : [];

  const result = () => {
    if (filterArray.length === 0) {
      return (
        <div>
          Error! Crypto Currency Not Found!
        </div>
      );
    }
    return filterArray.map((item) => (
      <>
        <div
          key={cryptoID()}
          aria-hidden="true"
          onClick={() => handleClick(item)}
        >
          <Crypto
            img={item.icon}
            name={item.name}
            price={item.price}
            priceChange={item.priceChange1w}
          />
        </div>
      </>
    ));
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(e) => setCryptoSearched(e.target.value)}
          placeholder="Type here..."
          className="searchInput"
          value={cryptoSearched}
        />
      </div>
      <div className="coinsContainer flex limit">{result()}</div>
    </>
  );
};

export default HomePage;

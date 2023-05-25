import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getCrypto } from '../redux/cryptoSlice/cryptoSlice';
import Crypto from '../components/Crypto';
import NotFound from '../components/404NotFound';
import homepage from '../styles/HomePage.module.css';

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
    if (item.uuid) {
      navigate(`details/${item.uuid}`);
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
        <NotFound />
      );
    }
    return filterArray.map((item) => (
      <>
        <div
          key={item.uuid}
          aria-hidden="true"
          onClick={() => handleClick(item)}
          className={homepage.cryptoDiv}
        >
          <Crypto
            key={item.uuid}
            img={item.iconUrl}
            name={item.name}
            price={item.price}
            priceChange={item.change}
            symbol={item.symbol}
          />
        </div>
      </>
    ));
  };

  return (
    <>
      <div className={homepage.searchContainer}>
        <input
          type="text"
          onChange={(e) => setCryptoSearched(e.target.value)}
          placeholder="Type here..."
          value={cryptoSearched}
        />
      </div>
      <h3 className={homepage.cryptoTitle}>Top 50 Crypto Currencies</h3>
      <div className={homepage.cryptoContainer}>{result()}</div>
    </>
  );
};

export default HomePage;

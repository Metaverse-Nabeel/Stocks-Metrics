/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getDetails } from '../redux/cryptoSlice/cryptoDetailsSlice';

const CurrencyDetails = () => {
  const { cryptoId } = useParams();
  const dispatch = useDispatch();
  const { cryptoDetails } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetails(cryptoId));
  }, [cryptoId, dispatch]);
  console.log(cryptoDetails);
  // Check if cryptoDetails is empty or still loading
  if (!cryptoDetails || cryptoDetails.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={cryptoDetails.icon} alt="crypto icon" />
      <div>
        Name:
        {cryptoDetails.name}
      </div>
      <div>
        Symbol:
        {cryptoDetails.symbol}
      </div>
      <div>
        Market Cap:
        {cryptoDetails.marketCap}
      </div>
      <div>
        Price changes - 1H -:
        {cryptoDetails.priceChange1h}
      </div>
      <div>
        Website:
        {cryptoDetails.websiteUrl}
      </div>
    </div>
  );
};

export default CurrencyDetails;

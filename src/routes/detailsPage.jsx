import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getOneCrypto } from '../redux/cryptoSlice/cryptoDetailsSlice';
import detailsPage from '../styles/DetailsPage.module.css';

const CurrencyDetails = () => {
  const { cryptoID } = useParams();
  const dispatch = useDispatch();
  const { cryptoDetails } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getOneCrypto(cryptoID));
  }, [cryptoID, dispatch]);
  if (!cryptoDetails || cryptoDetails.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={detailsPage.container}>
      <h2 className={detailsPage.title}>{cryptoDetails.name}</h2>
      <img src={cryptoDetails.iconUrl} alt="Crypto icon" className={detailsPage.detailsIcon} />
      <div className={detailsPage.specs}>
        <div className={detailsPage.specsDetails}>
          <span className={detailsPage.text}>Symbol:</span>
          {cryptoDetails.symbol}
        </div>
        <div className={detailsPage.specsDetail}>
          <span className={detailsPage.text}>MarketCap: $</span>
          {cryptoDetails.marketCap}
        </div>
        <div className={detailsPage.specsDetails}>
          <span className={detailsPage.text}>Price changes (1H) :</span>
          {cryptoDetails.change}
        </div>
        <div className={detailsPage.specsDetail}>
          <a href={cryptoDetails.websiteUrl} target="blank">{cryptoDetails.websiteUrl}</a>
        </div>
      </div>
    </div>
  );
};

export default CurrencyDetails;

import React from 'react';
import NF from '../styles/NotFound.module.css';
import NFimage from '../assets/Error404.svg';

const NotFound = () => (
  <div className={NF.container}>
    <h3 className={NF.title}>Crypto Not Found</h3>
    <img src={NFimage} alt="Image404Error" className={NF.image404} />
  </div>
);

export default NotFound;

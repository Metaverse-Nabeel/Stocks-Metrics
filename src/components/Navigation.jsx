/* eslint-disable import/no-extraneous-dependencies */
import { useNavigate } from 'react-router';
import { IoChevronBackSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { CiSettings } from 'react-icons/ci';
import logo from '../assets/logo.svg';
import Navbar from '../styles/Navigation.module.css';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className={Navbar.wrapper}>
        <div className={Navbar.container}>
          <div
            className={Navbar.backLink}
            aria-hidden="true"
            onClick={() => navigate('/')}
          >
            <IoChevronBackSharp />
          </div>
          <div className={Navbar.logoContainer}>
            <Link to="/">
              <img src={logo} alt="Crypto-Currency-Logo" />
            </Link>
          </div>
          <div className={Navbar.backLink}>
            <CiSettings />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

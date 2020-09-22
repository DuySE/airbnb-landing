import React from 'react';
import logo from '../images/airbnb-logo.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <span>Become a host</span>
        <span>Help</span>
        <span>Sign up</span>
        <span>Log in</span>
      </div>
    </div>
  )
}

export default Header;

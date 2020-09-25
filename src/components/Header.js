import React from 'react';
import Toggle from './Toggle';
import './Header.css';

const Header = props => {
  return (
    <div className="header" role="full-horizontal">
      <div className="logo">
        <img src="/images/airbnb-logo.svg" alt="logo" />
      </div>
      <ul className="menu">
        <li>{<Toggle onChange={props.onChange} />}</li>
        <li>Become a host</li>
        <li>Help</li>
        <li>Sign up</li>
        <li>Log in</li>
      </ul>
    </div>
  )
}

export default Header;

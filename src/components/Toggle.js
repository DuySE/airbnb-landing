import React from 'react';
import './Toggle.css';

const Toggle = props => {
  return (
    <div>
      <input type="checkbox" className="checkbox" id="chk" onChange={props.onChange} />
      <label className="label" htmlFor="chk">
        <img className="fas fa-moon" src="/images/night-icon.svg" alt="moon" />
        <img className="fas fa-sun" src="/images/sunny-icon.svg" alt="sun" />
        <div className="ball"></div>
      </label>
    </div>
  )
}

export default Toggle;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Autocomplete.css';

function Autocomplete() {
  /*
    States:
    - activeOption: active option's index
    - matchedOptions: all options that match with the user's input
    - showOptions: decide whether or not option list is shown
    - userInput: value entered by user
  */
  const [activeOption, setActiveOption] = useState(0);
  const [matchedOptions, setMatchedOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [userInput, setUserInput] = useState('');

  // Fire event when user enter value
  function onChange(e) {
    const { options } = this.props;
    const userInput = e.target.value;

    // Filter out options that match with user input
    const matchedOptions = options.filter(
      () => options.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setActiveOption(0);
    setMatchedOptions(matchedOptions);
    setShowOptions(true);
    setUserInput(e.target.value);
  }
  // Fire event when user click option
  function onClick(e) {
    setActiveOption(0);
    setMatchedOptions([]);
    setShowOptions(false);
    setUserInput(e.target.value);
  }
  function onKeyDown(e) {
    // Fire event when user press Enter key
    if (e.keyCode === 13) {
      setActiveOption(0);
      setMatchedOptions(false);
      setUserInput(matchedOptions[activeOption]);
    }
    // Fire event when user press Up arrow
    else if (e.keyCode === 38) {
      if (activeOption === 0) {
        setActiveOption(matchedOptions.length);
      }
      setActiveOption(activeOption - 1);
    }
    // Fire event when user press Down arrow
    else if (e.keyCode === 40) {
      if (activeOption - 1 === matchedOptions.length) {
        setActiveOption(0);
      }
      setActiveOption(activeOption + 1);
    }
  }
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Try Vietnam"
        onChange={e => onChange(e)}
        onKeyDown={e => onKeyDown(e)}
        onClick={e => onClick(e)}
      />
    </div>
  )
}

Autocomplete.propTypes = {
    options: PropTypes.instanceOf(Array).isRequired
};

export default Autocomplete;

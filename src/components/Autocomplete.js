import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Autocomplete.css';

const Autocomplete = props => {
  /*
    States:
    - activeOption: active option's index
    - matchedOptions: all options that match with the user's input
    - showOptions: decide whether or not option list is shown
    - userInput: value entered by user
  */
  const { options, isDark } = props;
  const [activeOption, setActiveOption] = useState(0);
  const [matchedOptions, setMatchedOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [userInput, setUserInput] = useState('');

  // Fire event when user enter value
  function onChange(e) {
    const userInput = e.currentTarget.value;

    // Filter out options that match with user input
    const matchedOptions = options.filter(
      option => option.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setActiveOption(0);
    setMatchedOptions(matchedOptions);
    setShowOptions(true);
    setUserInput(e.currentTarget.value);
  }

  // Fire event when user click option
  function onClick(e) {
    setActiveOption(0);
    setMatchedOptions([]);
    setShowOptions(false);
    setUserInput(e.currentTarget.innerText);
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
        setActiveOption(matchedOptions.length - 1);
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

  let suggestions;
  let suggestionStyle = {}, inputStyle = {};
  if (isDark) {
    suggestionStyle = {
      backgroundColor: '#1b1b1b',
      boxShadow: '1px 1px 1px #1b1b1b',
      color: 'white'
    };
    inputStyle = {
      backgroundColor: '#0e0e0e',
      color: 'white',
      boxShadow: '1px 1px 1px #0e0e0e',
      backgroundImage: `url('/images/dark-search-icon.svg')`
    };
  }
  if (showOptions && userInput) {
    if (matchedOptions.length) {
      suggestions = (
        <div className="suggestions">
          {matchedOptions.map((option, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === activeOption) {
              className = "suggestion-active";
            }

            return (
              <div
                className={className}
                key={option}
                onClick={onClick}
                style={suggestionStyle}
              >
                {option}
              </div>
            );
          })}
        </div>
      );
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        style={inputStyle}
        placeholder="Try Vietnam"
        value={userInput}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      {suggestions}
    </div>
  )
}

Autocomplete.defaultProps = {
  options: []
};

Autocomplete.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired
};

export default Autocomplete;

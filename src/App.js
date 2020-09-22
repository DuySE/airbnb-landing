import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Autocomplete from './components/Autocomplete';

function App() {
  return (
    <div className="App">
      <Header />
      <Autocomplete />
    </div>
  );
}

export default App;

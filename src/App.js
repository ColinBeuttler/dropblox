import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Listarray from './Listarray'



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome To Dropblox
         
        </p>

        <Listarray />
      
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      </header>
    </div>
  );
}

export default App;

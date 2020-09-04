<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

=======
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fileselector from './Fileselector'
import Listfile from './Listfiles';



class App extends Component {

  state= {
    file:[]
  }

  Render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome To Filedrop

        </p>

          <Fileselector filename={this.state}/>

          {/* <Listfile /> */}

          <img src={logo} className="App-logo" alt="logo" />


        </header>
      </div>

    )
  }
}






>>>>>>> 2f0a8811ffd8eb0489cdb542297bacafe3f353a5
export default App;

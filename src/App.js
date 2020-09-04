import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fileselector from './Containers/Fileselector'
import Listfile from './Containers/Listfiles';



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

          <Listfile />

          <img src={logo} className="App-logo" alt="logo" />


        </header>
      </div>

    )
  }
}






export default App;

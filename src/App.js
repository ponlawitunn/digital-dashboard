import React, { Component } from 'react';
import Toolbar from './Toolbar.js';
import './App.css';
import Dashboard from './Dashboard.js';



class App extends Component {
  render() {
		
    return (
      <div className="App">
      <Toolbar/>
      <Dashboard/> 

			
      </div>
    );
  }
}

export default App;

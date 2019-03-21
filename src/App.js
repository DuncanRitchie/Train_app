import React, { Component } from 'react';
import Home from './components/home/Home'
import './App.css';

class App extends Component {
    state = {
      fromStation: '',
      toStation: '',
      leavingDate: '',
      leavingTime: '',
      return: false,
      returnDate: '',
      returnTime: '',
      adults: 1,
      kids: 0,
      railcards: '',
    }
  

  render() {
    return (
      <div className="App">
      <Home/>
        {/* <HeaderBar/>
        
        <Menu/> */}
      </div>
    );
  }
}

export default App;

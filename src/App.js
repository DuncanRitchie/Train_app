import React, { Component } from 'react';
import Home from './components/home/Home'
import './App.css';

class App extends Component {
    state = {
      fromStation:'', 
      toStation:'', 
      leavingDate:'', 
      departingStatus:'',
      leavingTime:'', 
      returnCheck:false, 
      returningDate:'', 
      returningStatus:'',
      returningTime:'', 
      adultCount:1, 
      childCount:0
    }
  
    handleChange = ({target}) => {
      const name = target.name
      const value = target.type === 'checkbox' ? target.checked : target.value
      this.setState({
        [name]: value
      })
    }

  render() {
    
    const { fromStation, toStation, leavingDate, departingStatus, leavingTime, returnCheck, returningDate, returningStatus, returningTime, adultCount, childCount } = this.state
    return (
      <div className="App">
        <Home 
          fromStation={fromStation}
          toStation={toStation} 
          leavingDate={leavingDate}
          departingStatus={departingStatus}
          leavingTime={leavingTime}
          returnCheck={returnCheck} 
          returningDate={returningDate}
          returningStatus={returningStatus}
          returningTime={returningTime}
          adultCount={adultCount}
          childCount={childCount}
          handleChange = {this.handleChange}
        />
          
      </div>
    );
  }
}

export default App;

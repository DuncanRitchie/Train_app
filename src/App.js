import React, { Component } from 'react';
import Home from './components/home/Home'
import './App.css';

class App extends Component {
    state = {
      fromStation:'', 
      toStation:'', 
      leavingDate:'', 
      leavingTime:'', 
      returnCheck:false, 
      returningDate:'', 
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
    
    const { fromStation, toStation, leavingDate, leavingTime, returnCheck, returningDate, returningTime, adultCount, childCount } = this.state
    return (
      <div className="App">
        <Home 
          fromStation={fromStation}
          toStation={toStation} 
          leavingDate={leavingDate}
          leavingTime={leavingTime}
          returnCheck={returnCheck} 
          returningDate={returningDate}
          returningTime={returningTime}
          adultCount={adultCount}
          childCount={childCount}
          handleChange = {this.handleChange}
        />
          {/* // handleChangeFrom={this.handleChangeFrom}
          // handleChangeTo={this.handleChangeTo}
          // // handleChangeStatus={this.handleChangeStatus}
          // handleChangeDate={this.handleChangeDate}
          // handleChangeTime={this.handleChangeTime}
          // checkReturn={this.checkReturn} 
          // // handleChangeReturnStatus={this.handleChangeReturnStatus}
          // handleChangeReturnDate={this.handleChangeReturnDate}
          // handleChangeReturnTime={this.handleChangeReturnTime}
          // handleChangeCountAdult={this.handleChangeCountAdult}
          // handlecChangeCountChild={this.handlecChangeCountChild} */}
          
      </div>
    );
  }
}

export default App;

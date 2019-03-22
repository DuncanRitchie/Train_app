import React, { Component } from 'react';
import Home from './components/home/Home'
import './App.css';

class App extends Component {
    state = {
      fromStation: '',
      toStation: '',
      leavingDate: '',
      leavingTime: '',
      returnCheck: false,
      returnDate: '',
      returnTime: '',
      adults: 1,
      kids: 0,
      railcards: '',
    }
  
  handleChangeFrom = (e) => {
    this.setState({
      fromStation: e.target.value
    })
  }

  handleChangeTo = (e) => {
    this.setState({
      toStation: e.target.value
    })
  }

  // handleChangeStatus = (e) => {
  //   this.setState({

  //   })
  // }

  handleChangeDate = (e) => {
    this.setState({
      leavingDate: e.target.value
    })
  }

  handleChangeTime = (e) => {
    this.setState({
      leavingTime: e.target.value
    })
  }

  checkReturn = (e) => {
    this.setState({
      returnCheck: e.target.checked
    })
  }

  // handleChangeReturnStatus = (e) => {
  //   this.setState({
      
  //   })
  // }

  handleChangeReturnDate = (e) => {
    this.setState({
      returnDate: e.target.value
    })
  }

  handleChangeReturnTime = (e) => {
    this.setState({
      returnTime: e.target.value
    })
  }

  handleChangeCountAdult = (e) => {
    this.setState({
      adults: e.target.value
    })
  }

  handlecChangeCountChild = (e) =>  {
    this.setState({
      kids: e.target.value
    })
  }

  // toStationValue, leavingDate, leavingTime, returning, returningDate, returningTime, handleChangeFrom, handleChangeTo, handleChangeStatus, handleChangeDate, handleChangeTime, checkReturn, handleChangeReturnStatus, handleChangeReturnDate, handleChangeReturnTime

  render() {
    
    const { fromStation, toStation, leavingDate, leavingTime, returnCheck, returningDate, returningTime, adults, kids } = this.state
    return (
      <div className="App">
      <Home 
        fromStationValue={fromStation}
        toStationValue={toStation} 
        leavingDate={leavingDate}
        leavingTime={leavingTime}
        returning={returnCheck} 
        returningDate={returningDate}
        returningTime={returningTime}
        adultCount={adults}
        childCount={kids}
        handleChangeFrom={this.handleChangeFrom}
        handleChangeTo={this.handleChangeTo}
        // handleChangeStatus={this.handleChangeStatus}
        handleChangeDate={this.handleChangeDate}
        handleChangeTime={this.handleChangeTime}
        checkReturn={this.checkReturn} 
        // handleChangeReturnStatus={this.handleChangeReturnStatus}
        handleChangeReturnDate={this.handleChangeReturnDate}
        handleChangeReturnTime={this.handleChangeReturnTime}
        handleChangeCountAdult={this.handleChangeCountAdult}
        handlecChangeCountChild={this.handlecChangeCountChild}
      />

        {/* <HeaderBar/>
        
        <Menu/> */}
      </div>
    );
  }
}

export default App;

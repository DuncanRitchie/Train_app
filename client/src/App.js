import React, { Component } from 'react';
import Home from './components/home/Home';
import HeaderBar from './components/home/HeaderBar';
import MenuBar from './components/home/MenuBar';
import ResultPage from './components/home/ResultPage';
import NewsPage from './components/service-news/NewsPage';
import StationPage from './components/stationinfo/StationPage';
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
      childCount:0,
      outbound:[],
      chooseFromStations: [],
      chosenFromStation: '',
      chosenToStation: '',
      chooseToStations: [],
    }
  
    handleChange = ({target}) => {
      const name = target.name
      const value = target.type === 'checkbox' ? target.checked : target.value
      this.setState({
        [name]: value
      })
    }

    handleChangeFromStation = (e) => {
      this.setState({
        fromStation: e.target.value
      }, async () => {
        const {stations} = await fetch ('http://localhost:3001/chooseFromStation?fromStation=' + this.state.fromStation)
          .then((response) => response.json())
          this.setState({chooseFromStations: stations})
      })
    }
    
    handleSelectFromStation = (e) =>{
      this.setState({
        chosenFromStation: e.target.value
      })
    }

    handleSelectToStation = (e) =>{
      this.setState({
        chosenToStation: e.target.value
      })
    }

    handleChangeToStation = (e) => {
      this.setState({
        toStation: e.target.value
      }, async () => {
        const {stations} = await fetch ('http://localhost:3001/chooseToStation?toStation=' + this.state.toStation)
          .then((response) => response.json())
          this.setState({chooseToStations: stations})
      })
    }

    handleSubmit = (e) => {
      console.log('submited')
      e.preventDefault()
      fetch('http://localhost:3001/train?fromStation=' + this.state.fromStation + '&toStation=' + this.state.toStation + '&leavingDate=' + this.state.leavingDate + '&leavingTime=' + this.state.leavingTime)
        .then((response) => console.log(response))
        .then((outbound) => ({outbound}))
    }

  render() {
    
    const { chooseToStations, chooseFromStations, fromStation, toStation, leavingDate, departingStatus, leavingTime, returnCheck, returningDate, returningStatus, returningTime, adultCount, childCount } = this.state
    return (
      <div className="App">
        <HeaderBar title="live times & tickets"/>
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
          chooseFromStations={chooseFromStations}
          chooseToStations={chooseToStations}
          handleSelectFromStation={this.handleSelectFromStation}
          handleSelectToStation={this.handleSelectToStation}
          handleChange = {this.handleChange}
          handleChangeFromStation = {this.handleChangeFromStation}
          handleChangeToStation = {this.handleChangeToStation}
          handleSubmit = {this.handleSubmit}
        />

        <ResultPage/>
        <NewsPage/>
        <StationPage/>

        <MenuBar/>
          
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Home from './components/home/Home';
import HeaderBar from './components/home/HeaderBar';
import ResultPage from './components/home/ResultPage';
import NewsPage from './components/service-news/NewsPage'
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
          handleChange = {this.handleChange}
        />

        <ResultPage/>
        <NewsPage/>
          
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Home from './components/home/Home';
import MenuBar from './components/home/MenuBar';
import ResultPage from './components/home/ResultPage';
import NewsPage from './components/service-news/NewsPage';
import StationPage from './components/stationinfo/StationPage';
import './App.css';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const searchFromAPI = (origin) => fetch('/getStationList?placeName=' + origin)
const searchToAPI = (destination) => fetch('/getStationList?placeName=' + destination)

const searchAPIDebounced = AwesomeDebouncePromise(searchFromAPI, 1500);
const searchToAPIDebounced = AwesomeDebouncePromise(searchToAPI, 1500);

class App extends Component {
    state = {
        fromStation: '',
        toStation: '',
        leavingDate: '',
        departingStatus: '',
        leavingTime: '',
        returnCheck: false,
        returningDate: '',
        returningStatus: '',
        returningTime: '',
        adultCount: 1,
        childCount: 0,
        outbound: [],
        chooseFromStations: [],
        chosenFromStation: '',
        chosenToStation: '',
        chooseToStations: [],
        pageDisplayed: "home",
        searchBar: ""
    }

    handleChange = ({ target }) => {
        const name = target.name
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({
            [name]: value
        })
    }

    asyncFromStation = async() => {
        if (this.state.fromStation) {
            const { stations } = await searchAPIDebounced(this.state.fromStation)
                .then((response) => response.json())
            this.setState({ chooseFromStations: stations })
        }
    }

    handleChangeFromStation = (e) => {
        this.setState({
            fromStation: e.target.value
        }, this.asyncFromStation)

    }

    handleSelectFromStation = (e) => {
        this.setState({
            chosenFromStation: e.target.value
        })
    }

    handleSelectToStation = (e) => {
        this.setState({
            chosenToStation: e.target.value
        })
    }

    asyncToStation = async() => {
        if (this.state.toStation) {
            const { stations } = await searchToAPIDebounced(this.state.toStation)
                .then((response) => response.json())
            this.setState({ chooseToStations: stations })
        }
    }

    handleChangeToStation = (e) => {
        this.setState({
            toStation: e.target.value
        }, this.asyncToStation)
    }

    handleSubmit = (e) => {
        console.log('submited')
        e.preventDefault()
        fetch('/train?fromStation=' + this.state.fromStation +'&chosenFromStation=' + this.state.chosenFromStation + '&chosenToStation=' + this.state.chosenToStation + '&leavingDate=' + this.state.leavingDate + '&leavingTime=' + this.state.leavingTime)
            .then((response) => response.json())
            .then((data) => this.setState({ outbound: data.allDepartures }))
    }

    handlePageDisplayed = (page) => {
        // window.location = page;
        this.setState({ pageDisplayed: page, searchBar: '' })
    }

    // componentDidMount() {
    //     console.log(window.location.pathname)
    //     if (window.location.pathname.substr(0,5) === "/news") {
    //         this.setState({pageDisplayed: "news"})
    //     }
    //     else if (window.location.pathname.substr(0,8) === "/station") {
    //         this.setState({pageDisplayed: "station"})
    //     }
    // }

    render() {

        const { chooseToStations, chooseFromStations, fromStation, toStation, leavingDate, departingStatus, leavingTime, returnCheck, returningDate, returningStatus, returningTime, adultCount, childCount, outbound, pageDisplayed, searchBar} = this.state
            return ( <div className = "App" >
                {
// This is an object describing the three pages, which of which is rendered is determined by state.pageDisplayed 
                    {
                        home: 
                            <div>
    {/* This is a ternary operator deciding whether to render the home form or the results */}
                                {outbound.length=== 0 ? <Home fromStation = { fromStation }
                                toStation = { toStation }
                                leavingDate = { leavingDate }
                                departingStatus = { departingStatus }
                                leavingTime = { leavingTime }
                                returnCheck = { returnCheck }
                                returningDate = { returningDate }
                                returningStatus = { returningStatus }
                                returningTime = { returningTime }
                                adultCount = { adultCount }
                                childCount = { childCount }
                                chooseFromStations = { chooseFromStations }
                                chooseToStations = { chooseToStations }
                                handleSelectFromStation = { this.handleSelectFromStation }
                                handleSelectToStation = { this.handleSelectToStation }
                                handleChange = { this.handleChange }
                                handleChangeFromStation = { this.handleChangeFromStation }
                                handleChangeToStation = { this.handleChangeToStation }
                                handleSubmit = { this.handleSubmit }/> : 
                                <ResultPage searchResults={outbound} />}
                            </div>,
                        news: <NewsPage pageDisplayed={pageDisplayed} handleChange={this.handleSearch} searchBar={searchBar}/>,
                        station: <StationPage pageDisplayed={pageDisplayed} handleChange={this.handleSearch} searchBar={searchBar}/>
                    }[pageDisplayed]
                }

                
            <MenuBar handlePageDisplayed = { this.handlePageDisplayed }/>

            </div>
        );
    }
}

export default App;
import React from 'react';
import './Home.css';
import HeaderBar from './HeaderBar'

const Home = (props) => {
    const { handleSelectToStation, handleSelectFromStation, chooseFromStations, chooseToStations, handleChangeToStation, handleChangeFromStation, fromStation, toStation, leavingDate, leavingTime, returnCheck, returningDate, returningTime, adultCount, childCount, handleChange} = props
    return (
        <div className="journeyplanner">
            <HeaderBar title="live times &amp; tickets" />
            <form action="" method="" onSubmit={props.handleSubmit}>
                <label>Where from?</label>
                <input className="form-input" type="text" name="fromStation" value={fromStation} required placeholder="Station/Postcode" onChange={(e)=>handleChangeFromStation(e)}/>
                <label>Choose Origin Station</label>
                <select onChange={(e) => handleSelectFromStation(e)}>
                    <option>choose your origin station</option>
                    {chooseFromStations.map((station) => {
                        return (
                            <option key={station.station_code} value={station.station_code}>{station.name}</option>
                        )
                    })}
                </select>
                <label>Where to?</label>
                <input className="form-input" type="text" name="toStation" value={toStation} required placeholder="Station/Postcode" onChange={(e)=>handleChangeToStation(e)}/>
                <label>Choose Destination Station</label>
                <select onChange={(e) => handleSelectToStation(e)}>
                    <option>choose your destination station</option>
                    {chooseToStations.map((station) => {
                        return (
                            <option key={station.station_code} value={station.name}>{station.name}</option>
                        )
                    })}
                </select>
                <span className='time-info'>
                    <input className="form-input" type="date" name="leavingDate" value={leavingDate} required placeholder="Today" onChange={(e)=>handleChange(e)}/>
                    {/* <select className="form-input" name="departingStatus" required onChange={(e)=>handleChange(e)}>
                        <option value="leavingAfter">Leaving After</option>
                        <option value="arrivingBefore">Arriving Before</option>
                    </select> */}
                    <input className="form-input" type="time" name="leavingTime" value={leavingTime} placeholder="Time" onChange={(e)=>handleChange(e)}/>
                    <span><input type="checkbox" name="returnCheck" value={returnCheck} onChange={(e)=>handleChange(e)}/><label>Return?</label></span>
                </span>

                

                {returnCheck === true ? (
                    <span className='time-info'>
                    <input required className="form-input" type="date" name="returningDate" value={returningDate}  placeholder="Tomorrow" onChange={(e)=>handleChange(e)}/>
                    {/* <select required className="form-input"name="returningStatus" onChange={(e)=>props.handleChange(e)}>
                        <option value="leavingAfter">Leaving After</option>
                        <option value="arrivingBefore">Arriving Before</option>
                    </select> */}
                    
                    <input required className="form-input" type="time" name="returningTime" value={returningTime}  placeholder="Time" onChange={(e)=>handleChange(e)}/></span>
                ) : (
                    <span></span>
                )}

                <span className="count-container"><label>adult:</label> <input required className="count" type="number" min='1' max='5' name='adultCount' value={adultCount} onChange={(e)=>handleChange(e)}/></span>
                <span className="count-container"><label>children:</label> <input required className="count" type="number" min='0' max='5' name='childCount' value={childCount} onChange={(e)=>handleChange(e)}/></span>

                <button className="submit-btn" onSubmit={props.handleSubmitForm}>PLAN YOUR ROUTE</button>
            </form>
        </div>
    )
}

export default Home;
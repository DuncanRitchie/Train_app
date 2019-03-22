import React from 'react';
import './Home.css';

const Home = (props) => {
    const { fromStationValue,toStationValue, leavingDate, leavingTime, returning, returningDate, returningTime, adultCount, childCount, handleChangeFrom, handleChangeTo, handleChangeStatus, handleChangeDate, handleChangeTime, checkReturn, handleChangeReturnStatus, handleChangeReturnDate, handleChangeReturnTime, handleChangeCountAdult, handleChangeCountChild } = props
    return (
        <div id="journeyplanner">
            <form onSubmit={props.handlSubmit}>
                <label>Where from?</label>
                <input class="form-input" type="text" name="fromStation" value={fromStationValue} placeholder="Station/Postcode" onChange={(e)=>handleChangeFrom(e)}/>
                <label>Where to?</label>
                <input class="form-input" type="text" name="toStation" value={toStationValue}  placeholder="Station/Postcode" onChange={(e)=>handleChangeTo(e)}/>
                
                <span class='time-info'>
                    <input class="form-input" type="date" name="LeavingDate" value={leavingDate} placeholder="Today" onChange={(e)=>handleChangeDate(e)}/>
                    <select class="form-input" name="Status" onChange={(e)=>handleChangeStatus(e)}>
                        <option value="LeavingAfter">Leaving After</option>
                        <option value="ArrivingBefore">Arriving Before</option>
                    </select>
                    <input class="form-input" type="time" name="LeavingTime" value={leavingTime}  placeholder="Time" onChange={(e)=>handleChangeTime(e)}/>
                    <span><input type="checkbox" name="returning?" value={returning} onChange={(e)=>checkReturn(e)}/><label>Return?</label></span>
                </span>

                

                {props.returning === true ? (
                    <span class='time-info'>
                    <input class="form-input" type="date" name="ReturningDate" value={returningDate}  placeholder="Tomorrow" onChange={(e)=>handleChangeReturnDate(e)}/>
                    <select class="form-input"name="Status" onChange={(e)=>props.handleChangeReturnStatus(e)}>
                        <option value="LeavingAfter">Leaving After</option>
                        <option value="ArrivingBefore">Arriving Before</option>
                    </select>
                    
                    <input class="form-input" type="time" name="ReturningTime" value={returningTime}  placeholder="Time" onChange={(e)=>handleChangeReturnTime(e)}/></span>
                ) : (
                    <span></span>
                )}

                <span class="count-container"><label>adult:</label> <input class="count" type="number" min='1' max='5' name='adultcounter' value={adultCount} onChange={(e)=>handleChangeCountAdult(e)}/></span>
                <span class="count-container"><label>children:</label> <input class="count" type="number" min='0' max='5' name='kidscounter' value={childCount} onChange={(e)=>handleChangeCountChild(e)}/></span>

                <button id="submit-btn"onSubmit={props.handleSubmitForm}>PLAN YOUR ROUTE</button>
            </form>
        </div>
    )
}

export default Home;
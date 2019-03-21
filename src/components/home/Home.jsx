import React from 'react';
import './Home.css';

const Home = (props) => {
    const { fromStationValue,toStationValue, leavingDate, leavingTime, returning, returningDate, returningTime, adultCount, childCount, handleChangeFrom, handleChangeTo, handleChangeStatus, handleChangeDate, handleChangeTime, checkReturn, handleChangeReturnStatus, handleChangeReturnDate, handleChangeReturnTime, handleChangeCountAdult, handleChangeCountChild } = props
    return (
        <div id="journeyplanner">
            <form onSubmit={props.handlSubmit}>
                <p>Where from?</p>
                <input type="text" name="fromStation" value={fromStationValue} placeholder="Station/Postcode" onChange={(e)=>handleChangeFrom(e)}/>
                <p>Where to?</p>
                <input type="text" name="toStation" value={toStationValue}  placeholder="Station/Postcode" onChange={(e)=>handleChangeTo(e)}/>

                <select name="Status" onChange={(e)=>handleChangeStatus(e)}>
                    <option value="Leaving">Leaving</option>
                    <option value="Arriving">Arriving</option>
                </select>
                <input type="date" name="LeavingDate" value={leavingDate} placeholder="Today" onChange={(e)=>handleChangeDate(e)}/>
                <input type="time" name="LeavingTime" value={leavingTime}  placeholder="Time" onChange={(e)=>handleChangeTime(e)}/>
                
                <input type="checkbox" name="returning?" value={returning} onChange={(e)=>checkReturn(e)}/>

                {props.checkReturn === true ? (
                    <span>
                    <select name="Status" onChange={(e)=>props.handleChangeReturnStatus(e)}>
                        <option value="Leaving">Leaving</option>
                        <option value="Arriving">Arriving</option>
                    </select>
                    <input type="date" name="ReturningDate" value={returningDate}  placeholder="Tomorrow" onChange={(e)=>handleChangeReturnDate(e)}/>
                    <input type="time" name="ReturningTime" value={returningTime}  placeholder="Time" onChange={(e)=>handleChangeReturnTime(e)}/></span>
                ) : (
                    <span></span>
                )}

                <p>adult: <input type="number" min='1' max='5' name='adultcounter' value={adultCount} onChange={(e)=>handleChangeCountAdult(e)}/></p>
                <p>children: <input type="number" min='0' max='5' name='kidscounter' value={childCount} onChange={(e)=>handleChangeCountChild(e)}/></p>

                <button onSubmit={props.handleSubmitForm}>PLAN YOUR ROUTE</button>
            </form>
        </div>
    )
}

export default Home;
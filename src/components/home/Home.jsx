import React from 'react';
import './Home.css';

const Home = (props) => {
    const { fromStation, toStation, leavingDate, leavingTime, returnCheck, returningDate, returningTime, adultCount, childCount, handleChange} = props
    return (
        <div className="journeyplanner">
            <form onSubmit={props.handlSubmit}>
                <label>Where from?</label>
                <input className="form-input" type="text" name="fromStation" value={fromStation} placeholder="Station/Postcode" onChange={(e)=>handleChange(e)}/>
                <label>Where to?</label>
                <input className="form-input" type="text" name="toStation" value={toStation}  placeholder="Station/Postcode" onChange={(e)=>handleChange(e)}/>
                
                <span className='time-info'>
                    <input className="form-input" type="date" name="leavingDate" value={leavingDate} placeholder="Today" onChange={(e)=>handleChange(e)}/>
                    <select className="form-input" name="departingStatus" onChange={(e)=>handleChange(e)}>
                        <option value="leavingAfter">Leaving After</option>
                        <option value="arrivingBefore">Arriving Before</option>
                    </select>
                    <input className="form-input" type="time" name="leavingTime" value={leavingTime}  placeholder="Time" onChange={(e)=>handleChange(e)}/>
                    <span><input type="checkbox" name="returnCheck" value={returnCheck} onChange={(e)=>handleChange(e)}/><label>Return?</label></span>
                </span>

                

                {returnCheck === true ? (
                    <span className='time-info'>
                    <input className="form-input" type="date" name="returningDate" value={returningDate}  placeholder="Tomorrow" onChange={(e)=>handleChange(e)}/>
                    <select className="form-input"name="returningStatus" onChange={(e)=>props.handleChange(e)}>
                        <option value="leavingAfter">Leaving After</option>
                        <option value="arrivingBefore">Arriving Before</option>
                    </select>
                    
                    <input className="form-input" type="time" name="returningTime" value={returningTime}  placeholder="Time" onChange={(e)=>handleChange(e)}/></span>
                ) : (
                    <span></span>
                )}

                <span className="count-container"><label>adult:</label> <input className="count" type="number" min='1' max='5' name='adultCount' value={adultCount} onChange={(e)=>handleChange(e)}/></span>
                <span className="count-container"><label>children:</label> <input className="count" type="number" min='0' max='5' name='childCount' value={childCount} onChange={(e)=>handleChange(e)}/></span>

                <button className="submit-btn" onSubmit={props.handleSubmitForm}>PLAN YOUR ROUTE</button>
            </form>
        </div>
    )
}

export default Home;
import React from 'react';
import './Home.css';

const Home = (props) => {
    return (
        <div id="journeyplanner">
            <form onSubmit={props.handlSubmit}>
                <p>Where from?</p>
                <input type="text" name="fromStation" value="" placeholder="Station/Postcode" onChange={props.handleChangeFrom}/>
                <p>Where to?</p>
                <input type="text" name="toStation" value="" placeholder="Station/Postcode" onChange={props.handleChangeTo}/>

                <select name="Status" onChange={props.handleChangeStatus}>
                    <option value="Leaving">Leaving</option>
                    <option value="Arriving">Arriving</option>
                </select>
                <input type="date" name="LeavingDate" value="" placeholder="Today" onChange={props.handleChangeDate}/>
                <input type="time" name="LeavingTime" value="" placeholder="Time" onChange={props.handleChangeTime}/>
                <input type="checkbox" name="returning?" value="return" onChange={props.checkReturn}/>

                <select name="Status" onChange={props.handleChangeReturnStatus}>
                    <option value="Leaving">Leaving</option>
                    <option value="Arriving">Arriving</option>
                </select>
                <input type="date" name="ReturningDate" value="" placeholder="Tomorrow" onChange={props.handleChangeReturnDate}/>
                <input type="time" name="ReturningTime" value="" placeholder="Time" onChange={props.handleChangeReturnTime}/>

                <button onSubmit={props.handleSubmitForm}>PLAN YOUR ROUTE</button>
            </form>
        </div>
    )
}

export default Home;
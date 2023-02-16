import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from '../pages/Home';
import Bookings from '../pages/Booking';
import { useState, useReducer, useEffect } from "react"
import { fetchAPI, submitAPI } from '../tempAPI.js'
import ConfirmedBooking from './ConfirmedBooking';


function Main() {

    const updateTimes = (state, action) => {
        console.log(state)
        if (action.type === 'select_new_date') return ({availableTimes: fetchAPI(new Date(action.date))});
        return state;
    }

     const initializeTimes = () => {
        const date = new Date();
        return (fetchAPI(date));
    }

    const [state, dispatch] = useReducer(updateTimes, {availableTimes: initializeTimes()});



    const navigate = useNavigate();
    const submitForm = (formData) => {
        if (submitAPI(formData) === true) {
            navigate("/booking-confirmed");
        }
    }


    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/booking" element={<Bookings availableTimes={state} changeDate={(e) => dispatch({ type: "select_new_date", date : e.target.value})} submitForm={submitForm} />}/>
                <Route path="/booking-confirmed" element={<ConfirmedBooking/>}></Route>
            </Routes>
        </main>
    )
}


export default Main;
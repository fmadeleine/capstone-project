import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Bookings from '../pages/Booking';
import { useState, useReducer, useEffect } from "react"
import { fetchAPI, submitAPI } from '../tempAPI.js'


function Main() {

    const initialTimes = [
        {
            id: "16:00",
            value: "16:00",
        },
        {
            id: "16:30",
            value: "16:30",
        },
        {
            id: "17:00",
            value: "17:00",
        },
        {
            id: "17:30",
            value: "17:30",
        },
        {
            id: "18:00",
            value: "18:00",
        },
        {
            id: "18:30",
            value: "18:30",
        },
        {
            id: "19:00",
            value: "19:00",
        },
        {
            id: "19:30",
            value: "19:30",
        },
        {
            id: "20:00",
            value: "20:00",
        },
        {
            id: "20:30",
            value: "20:30",
        },
        {
            id: "21:00",
            value: "21:00",
        },
        {
            id: "21:30",
            value: "21:30",
        },
    ]


    
    const updateTimes = (state, action) => {
        if (action.type === 'select_new_date') return ({availableTimes: fetchAPI(new Date(action.date))});
        return state;
    }

     const initializeTimes = () => {
        const date = new Date();
        return (fetchAPI(date));
    }

    const [state, dispatch] = useReducer(updateTimes, {availableTimes: initializeTimes()});

    //const [date, setDate] = useState("");

    
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/booking" element={<Bookings availableTimes={state} changeDate={(e) => dispatch({ type: "select_new_date", date : e.target.value})} />}/>
            </Routes>
        </main>
    )
}


export default Main;
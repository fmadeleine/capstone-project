
import { useState, useReducer } from "react"
import { Link } from "react-router-dom";


function BookingForm(props) {

    const [guests, setGuests] = useState("1");
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    const [occasion, setOccasion] = useState("No special occasion");
    const [seating, setSeating] = useState("");
    const [time, setTime] = useState("");

    const availableSeating = [
        {
            id: "indoor",
            value: "Indoor",
        },
        {
            id: "outdoor",
            value: "Outdoor",
        }
    ]

    const handleSubmit = (e) => {
        const formData = {
            guests: guests,
            date: date,
            occasion: occasion,
            seating: seating,
            time: time
        };
        e.preventDefault();
        props.submitForm(formData);
        clearForm()
    }

    const clearForm = () => {
        setGuests("1");
        setDate(new Date().toISOString().split('T')[0]);
        setTime("");
        setOccasion("No special occasion");
        setSeating("");
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="bookings-container">
                <div className="bookings-segment guests">
                    <label htmlFor="guests"><h3>Number of Guests</h3></label>
                    <input type="number" placeholder="1" min={1} max={10} id="guests" name="guests" value={guests} onChange={(e) => { setGuests(e.target.value)}}></input>
                </div>
                <div className="bookings-segment date">
                    <label htmlFor="date"><h3>Date</h3></label>
                    <input type="date" name="date" data-testid="select-option" id="date" value={date} onChange={(e) => {props.changeDate(e); setDate(e.currentTarget.value); console.log(e.currentTarget.value)}}></input>
                </div>
                <div className="bookings-segment time">
                    <h3>Time</h3>
                    <div className="timeslots">
                     {props.availableTimes.map((option) => {
                     return(
                        <label htmlFor={option} key={option} >
                            <input type="radio" name="time" className="card-input-element" id={option} value={time} onChange={(e) => { setTime(option)}}></input>
                            <span className="card-input" >{option}</span>
                        </label>
                    )})} 
                    </div> 
                </div>
                <div className="bookings-segment occasion">
                    <label htmlFor="occasion">
                        <h3>Occasion</h3>
                        <p>Are you booking for a special occasion?</p>
                    </label>
                    <select id="occasion" name="occasion" value={occasion} onChange={(e) => { setOccasion(e.target.value)}}>
                        <option>No special occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                    </select>
                </div>
                <div className="bookings-segment seating">
                    <h3>Seating Options</h3>
                    <p>Please select a seating area</p>
                    <div className="seating-options">
                    {availableSeating.map((option) => (
                        <label htmlFor={option.id} key={option.id}>
                            <input type="radio" name="seating" className="card-input-element" id={option.id} value={seating} onChange={(e) => { setSeating(option.value)}}></input>
                            <span className="card-input">{option.value}</span>
                        </label>
                    ))}</div>
                    
                </div>
                <div className="bookings-segment bookings-nav">
                <input type="submit" role="button" className="btn-secondary-filled" value="Book table"></input>
                </div>
            </div>
        </form>
        </>
    )
}


export default BookingForm;
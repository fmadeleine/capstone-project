
import { useState, useReducer } from "react"
import { Link } from "react-router-dom";
import { Formik, Form, Field, useFormik, ErrorMessage } from 'formik';
import * as Yup from 'yup';


function BookingForm(props) {

    // const [guests, setGuests] = useState("1");
    // const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
    // const [occasion, setOccasion] = useState("No special occasion");
    // const [seating, setSeating] = useState("");
    // const [time, setTime] = useState("");

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

    // const handleSubmit = (e) => {
    //     const formData = {
    //         guests: guests,
    //         date: date,
    //         occasion: occasion,
    //         seating: seating,
    //         time: time
    //     };
    //     e.preventDefault();
    //     props.submitForm(formData);
    //     clearForm()
    // }

    // const clearForm = () => {
    //     setGuests("1");
    //     setDate(new Date().toISOString().split('T')[0]);
    //     setTime("");
    //     setOccasion("No special occasion");
    //     setSeating("");
    // }



    const styleError = {
        borderColor: "red",
        borderStyle: "solid",
    }

    const formik = useFormik({
        initialValues: {
            guests: 1,
            date: new Date().toISOString().split('T')[0],
            time: '',
            occasion: 'No special occasion',
            seating: ''
        },
        onSubmit: values => {
            props.submitForm(values);
        },
        validate: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            guests: Yup.number()
                .min(1, 'Please select at least 1 guest.')
                .max(10, 'Please contact us if you want to book a table for more than 10 people.')
                .required('Please choose a number of guests.'),
            date: Yup.date()
                .min(new Date().toISOString().split("T")[0], 'Please select a date in the future.')
                .required('Please select a date.'),
            time: Yup.string()
                .required('Please select a time.'),
            seating: Yup.string()
                .required('Please select a seating area.'),
        })
    })


    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className="bookings-container">
                    <div className="bookings-segment guests">
                        <label htmlFor="guests"><h3>Number of Guests</h3></label>
                        <input type="number" placeholder="1" id="guests" name="guests" {...formik.getFieldProps('guests')} style={formik.touched.guests && formik.errors.guests ? styleError : null}></input>
                        {formik.touched.guests && formik.errors.guests ? (
                            <div>{formik.errors.guests}</div>) : null}
                    </div>
                    <div className="bookings-segment date">
                        <label htmlFor="date"><h3>Date</h3></label>
                        <input type="date" name="date" data-testid="select-option" id="date" value={formik.values.date} onChange={(e) => {props.changeDate(e); formik.handleChange(e)}} style={formik.errors.date ? styleError : null}></input>
                        {formik.errors.date ? (
                            <div>{formik.errors.date}</div>) : null}
                    </div>
                    <div className="bookings-segment time">
                        <h3>Time</h3>
                        <div className="timeslots">
                        {props.availableTimes.map((option) => {
                        return(
                            <label htmlFor={option} key={option}>
                                <input type="radio" name="time" className="card-input-element" data-testid="time" id={option} value={option} onChange={formik.handleChange}></input>
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
                        <select id="occasion" name="occasion" required {...formik.getFieldProps('occasion')}>
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
                                <input type="radio" name="seating" className="card-input-element" data-testid="seating" id={option.id} value={option.value} onChange={formik.handleChange} style={formik.touched.seating && formik.errors.seating ? styleError : null}></input>
                                <span className="card-input">{option.value}</span>
                            </label>
                        ))} {formik.touched.seating && formik.errors.seating ? (
                            <div>{formik.errors.seating}</div>) : null}</div>
                        
                    </div>
                    <div className="bookings-segment bookings-nav">
                    <input type="submit" role="button" aria-label="Click" className="btn-secondary-filled" value="Book table" disabled={!(formik.isValid && formik.dirty)}></input>
                    </div>
                </div>
            </form>
        </>
    )
}


export default BookingForm;
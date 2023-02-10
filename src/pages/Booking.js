import BookingForm from "../components/BookingForm";

function Bookings(props) {
    return (
        <div className="content">
            <h1>Book a table</h1>
        <BookingForm availableTimes={props.availableTimes.availableTimes} changeDate={props.changeDate}/>
        </div>
    );
  }

  export default Bookings;

function Bookings() {
    return (
        <div className="content">
            <h1>Book a table</h1>
            <div className="bookings-container">
                <div className="bookings-segment guests">
                    <div className="bookings-content">
                        <h3>Number of Guests</h3>
                    </div>
                </div>
                <div className="bookings-segment date">
                    <div className="bookings-content">
                        <h3>Date</h3>
                        <h4>February 2023</h4>
                    </div>
                </div>
                <div className="bookings-segment time">
                    <div className="bookings-content">
                        <h3>Time</h3>
                        <div className="timeslots">
                            <span>16:00</span>
                            <span>16:30</span>
                            <span>17:00</span>
                            <span>17:30</span>
                            <span>18:00</span>
                            <span>18:30</span>
                            <span>19:00</span>
                            <span>19:30</span>
                            <span>20:00</span>
                            <span>20:30</span>
                            <span>21:00</span>
                            <span>21:30</span>
                        </div>
                    </div>
                </div>
                <div className="bookings-segment occasion">
                    <div className="bookings-content">
                        <h3>Occasion</h3>
                        <p>Are you booking for a special occasion?</p>
                    </div>
                </div>
                <div className="bookings-segment seating">
                    <div className="bookings-content">
                        <h3>Seating Options</h3>
                        <p>Please select a seating area</p>
                    </div>
                </div>
                <div className="bookings-segment bookings-nav">
                    <div className="button-group">
                        <a href="" role="button" className="btn-secondary-outlined">Back</a>
                        <a href="" role="button" className="btn-secondary-filled">Continue</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }

  export default Bookings;

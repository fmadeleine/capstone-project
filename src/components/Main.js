import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Bookings from '../pages/Booking';


function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/booking" element={<Bookings/>}/>
            </Routes>
        </main>
    )
}


export default Main;
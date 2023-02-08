import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <div className="nav-content">
                <div>
                    <img src="images/logo.png" width={200} alt="little lemon logo"/>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/booking">Reservations</Link></li>
                        <li><Link to="/order">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }

  export default Nav;


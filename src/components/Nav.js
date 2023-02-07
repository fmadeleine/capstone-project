

function Nav() {
    return (
        <nav>
            <div className="nav-content">
                <div>
                    <img src="images/logo.png" width={200} alt="little lemon logo"/>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
  }

  export default Nav;


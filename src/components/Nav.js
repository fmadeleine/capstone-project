import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import styled from 'styled-components';


const NavStyle = styled.div`
        @media (max-width: 767px) {
            display: ${props => props.display};
            background-color: #EDEFEE;
            height: 100vh;
            width: 60vw;
            position: fixed;
            right: 0;
            top: 0;
            z-index: 10;
            box-shadow: -10px 0px 50px #0000001f;
            
            ul {
                flex-direction: column;
                padding: 2rem;
            }

            ul li a {
                color: #333333;
            }
        },`


function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <nav>
            <div className="nav-content">
                <div>
                    <Link to="/" >
                        <img src="images/logo.png" width={200} alt="little lemon logo"/>
                    </Link>
                </div>
                <NavStyle className="nav-links" display={hamburgerOpen ? 'block' : 'none'}>
                    <ul>
                        <li><Link to="/" onClick={toggleHamburger}>Home</Link></li>
                        <li><Link to="/about" onClick={toggleHamburger}>About</Link></li>
                        <li><Link to="/menu" onClick={toggleHamburger}>Menu</Link></li>
                        <li><Link to="/booking" onClick={toggleHamburger}>Reservations</Link></li>
                        <li><Link to="/order" onClick={toggleHamburger}>Order Online</Link></li>
                        <li><Link to="/login" onClick={toggleHamburger}>Login</Link></li>
                    </ul>
                </NavStyle>
                <div className='hamburger-menu' onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
            </div>
        </nav>
    );
  }

  export default Nav;


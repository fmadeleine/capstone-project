import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="hero-section">
            <div className="content">
                <div className="hero-col-1">
                    <div>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae urna ac enim scelerisque convallis. Nulla pretium tellus ut tellus maximus semper. Nunc vel sapien convallis, sollicitudin nibh sed, pretium ligula. </p>
                    </div>
                    <div role="button" className="btn-primary"><Link to="/booking">Reserve a Table</Link></div>
                </div>
                <div className="hero-col-2">
                    <img src="images/restauranfood.jpg" width={500} alt="chef holding a tray of food"></img>
                </div>
            </div>
        </div>
    )
}

export default Hero;
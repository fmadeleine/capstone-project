import { Link } from "react-router-dom";

function Specials() {
    return (
        <div className="content">
            <div className="specials-header">
                <h3>This week's specials!</h3>
                <div role="button" className="btn-primary"><Link to="/menu">View Menu</Link></div>
            </div>
            <div className="specials-wrapper">
                <div className="specials-carousel">
                    <div className="specials-card">
                        <img src="images/greeksalad.jpg" alt="greek salad"></img>
                        <div className="specials-content">
                            <div className="specials-content-header">
                                <h4>Greek Salad</h4>
                                <p className="highlight">$ 13.00</p>
                            </div>
                            <div className="specials-content-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae urna ac enim scelerisque convallis. </p>
                                <div className="order-delivery">
                                    <span className="highlight">Order a delivery</span>
                                    <img src="images/dish-icon.svg" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="specials-card">
                        <img src="images/bruschetta.png" alt="bruschetta"></img>
                        <div className="specials-content">
                            <div className="specials-content-header">
                                <h4>Bruschetta</h4>
                                <p className="highlight">$ 7.00</p>
                            </div>
                            <div className="specials-content-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae urna ac enim scelerisque convallis. </p>
                                <div className="order-delivery">
                                    <span className="highlight">Order a delivery</span>
                                    <img src="images/dish-icon.svg" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="specials-card">
                        <img src="images/lemondessert.jpg" alt="slices of lemon cake"></img>
                        <div className="specials-content">
                            <div className="specials-content-header">
                                <h4>Lemon Dessert</h4>
                                <p className="highlight">$ 6.00</p>
                            </div>
                            <div className="specials-content-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae urna ac enim scelerisque convallis. </p>
                                <div className="order-delivery">
                                    <span className="highlight">Order a delivery</span>
                                    <img src="images/dish-icon.svg" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="specials-card">
                        <img src="images/aubergine.jpg" alt="baked aubergine"></img>
                        <div className="specials-content">
                            <div className="specials-content-header">
                                <h4>Baked Aubergine</h4>
                                <p className="highlight">$ 13.00</p>
                            </div>
                            <div className="specials-content-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae urna ac enim scelerisque convallis. </p>
                                <div className="order-delivery">
                                    <span className="highlight">Order a delivery</span>
                                    <img src="images/dish-icon.svg" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specials;
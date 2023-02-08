function About() {
    return (
        <div className="content">
            <div className="about-section">
                <div className="about-col-1">
                        <div>
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae urna ac enim scelerisque convallis. Nulla pretium tellus ut tellus maximus semper. Nunc vel sapien convallis, sollicitudin nibh sed, pretium ligula. </p>
                        </div>
                    </div>
                    <div className="about-col-2">
                        <img src="images/about2.jpg" width={350} height={400} alt="two chefs in the kitchen" id="img1"></img>
                        <img src="images/about3.jpg" width={350} height={400} alt="a chef decorating a salad" id="img2"></img>
                </div>
            </div>
        </div>
    )
}

export default About;
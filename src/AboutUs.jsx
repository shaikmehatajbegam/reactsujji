import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';

function Aboutus() {
    
    const navigate = useNavigate(); // Initialize navigate function


    return (
        <div className="container mt-5">
            <h2 className="text-center text-primary mb-4">Aboutgit Us</h2>

            <div className="row align-items-center">
                <div className="col-md-6">
                    <img 
                        src="aboutus.jpg" 
                        alt="About Us" 
                        className="img-fluid rounded shadow"
                        style={{ height: '400px', width: '100%', objectFit: 'cover' }}
                    />
                </div>
                <div className="col-md-6">
                    <h3 className="text-success">Our Mission</h3>
                    <p>
                        At <strong>FreshMart</strong>, we aim to deliver high-quality products with great value.
                        Our commitment to customer satisfaction drives us to improve continuously.
                    </p>

                    <h3 className="text-success">Our Values</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Integrity:</strong> We uphold the highest ethical standards.</li>
                        <li className="list-group-item"><strong>Customer First:</strong> Your satisfaction is our priority.</li>
                        <li className="list-group-item"><strong>Innovation:</strong> Bringing creative solutions to enhance your experience.</li>
                        <li className="list-group-item"><strong>Sustainability:</strong> Supporting eco-friendly and sustainable practices.</li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-5">
                <h3 className="text-success">Why Choose Us?</h3>
                <p>
                    With a legacy of customer satisfaction, we offer a diverse range of fresh products to meet every need.
                    Our team is dedicated to ensuring a seamless shopping experience for you.
                </p>
                     
                {/* Navigate to Contact Us Page */}
                <button className="btn btn-primary btn-lg" onClick={() => navigate('/contactus')}>
                    Contact Us
                </button>
            </div>
        </div>
    );
}

export default Aboutus;

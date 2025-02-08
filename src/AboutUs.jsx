import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const AboutUs = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center text-primary mb-4">About Us</h2>

            <div className="row">
                <div className="col-md-6">
                    <img 
                        src="aboutus.jpg" 
                        alt="About Us" 
                        className="img-fluid rounded"
                        style={{ height: '400px', width: '500px', objectFit: 'cover' }}
                        />
                </div>
                <div className="col-md-6">
                    <h3>Our Mission</h3>
                    <p>
                        At [Company Name], our mission is to deliver the best products to our customers with a focus on quality and value. We aim to make every experience memorable, and our commitment to excellence drives us to continually improve.
                    </p>
                    
                    <h3>Our Values</h3>
                    <ul>
                        <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all of our actions.</li>
                        <li><strong>Customer First:</strong> We are passionate about providing our customers with exceptional service.</li>
                        <li><strong>Innovation:</strong> We embrace creativity and strive to bring innovative solutions to market.</li>
                        <li><strong>Sustainability:</strong> We are dedicated to minimizing our environmental impact and supporting sustainable practices.</li>
                    </ul>
                </div>
            </div>

            <div className="text-center mt-5">
                <h3>Why Choose Us?</h3>
                <p>
                    With a rich history of customer satisfaction, we offer a wide range of products designed to meet the needs of every individual. Our customer-centric approach ensures that we prioritize your needs above all else.
                </p>
                <button className="btn btn-primary btn-lg">Contact Us</button>
            </div>
        </div>
    );
}

export default AboutUs;
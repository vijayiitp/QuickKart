import React, { useState } from 'react';
// import './style.css';

const Footer = () => {
    return (
        <div>
            <footer className="section-p1">
                <div className="col">
                    <img className="logo" src="images/logo.png" alt="Logo" />
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> Orai 285001</p>
                    <p><strong>Contact:</strong> Orai 285001</p>
                    <p><strong>Phone:</strong> Orai 285001</p>
                    <p><strong>Hours:</strong> 10:00-18:00, Mon-Sat</p>
                    <div className="follow">
                        <h4>FOLLOW US</h4>
                        <div className="icon">
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <h4>About</h4>
                    <a href="#">About Us</a>
                    <a href="#">Delivery Information</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Contact Us</a>
                </div>
                <div className="col">
                    <h4>My Account</h4>
                    <a href="#">Sign In</a>
                    <a href="#">View Cart</a>
                    <a href="#">Track Order</a>
                    <a href="#">View Cart</a>
                </div>
                <div className="col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div className="row">
                        <img src="images/app.jpg" alt="App Store" />
                        <img src="images/play.jpg" alt="Google Play" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src="images/pay.png" alt="Payment Methods" />
                </div>
            </footer>
            <div className="copyright">
                <p>@ 2023, HTML CSS Template by Vijay</p>
            </div>
        </div>
    );
};

export default Footer;

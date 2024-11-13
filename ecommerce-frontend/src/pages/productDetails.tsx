import React, { useState } from 'react';
// import './style.css';

const ProductDetails = () => {
    const [mainImg, setMainImg] = useState('images/f1.jpg');

    const handleImageClick = () => {
        setMainImg();
    };

    return (
        <div>
            <section id="prodetails" className="section-p1">
                <div className="single-pro-image">
                    <img src={mainImg} width="100%" id="mainimg" alt="Main product" />
                    <div className="small-img-group">
                        {['f1.jpg', 'f2.jpg', 'f3.jpg', 'f4.jpg'].map((img, index) => (
                            <div className="small-img-col" key={index}>
                                <img 
                                    src={`images/${img}`} 
                                    width="100%" 
                                    className="small-img" 
                                    onClick={() => handleImageClick(`images/${img}`)} 
                                    alt={`Thumbnail ${index + 1}`} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="single-pro-details">
                    <h6>Home/ T-Shirt</h6>
                    <h4>Men's Fashion T-Shirts</h4>
                    <h2>$120.0</h2>
                    <select>
                        <option>XXL</option>
                        <option>XL</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                    <input type="number" defaultValue="1" />
                    <button className="normal">
                        Add To Cart
                    </button>
                    <h4>Product Details</h4>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quasi commodi ex eligendi atque, aspernatur fuga eveniet ea corporis maiores libero ipsam magnam aliquid itaque doloremque optio esse repellat maxime?</span>
                </div>
            </section>

            <section id="product1" className="section-p1">
                <h2>Upcoming Products</h2>
                <p>Seasonal product as per your choice</p>
                <div className="pro-container">
                    {['n5.jpg', 'n6.jpg', 'n7.jpg', 'n8.jpg'].map((img, index) => (
                        <div className="pro" key={index}>
                            <img src={`images/${img}`} alt="Product" />
                            <div className="des">
                                <span>Vijay_T-shirts</span>
                                <h5>Astronut T-shirts</h5>
                                <div className="star">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <i key={starIndex} className="fas fa-star"></i>
                                    ))}
                                </div>
                                <h4>$78</h4>
                            </div>
                            <a href="#"><i className="fal fa-shopping-cart cart"></i></a>
                        </div>
                    ))}
                </div>
            </section>

            <section id="newsletter" className="section-p1 section-m1">
                <div className="newtext">
                    <h4>SIGN UP For Newsletter</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Your E-mail address" />
                    <button className="normal">Sign Up</button>
                </div>
            </section>
            <div className="copyright">
                <p>@ 2023, HTML CSS Template by Vijay</p>
            </div>
        </div>
    );
};

export default ProductDetails;

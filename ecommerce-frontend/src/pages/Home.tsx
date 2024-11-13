import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Skeleton } from "../components/loader";
import ProductCard from "../components/ProductCard";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import { CartItem } from "../types/types";
import { addToCart } from "../redux/reducer/cartReducer";
// const Home = () => {
//   const { data, isLoading, isError } = useLatestProductsQuery("");
//   const dispatch = useDispatch();

//   const addToCartHandler = (cartItem: CartItem) => {
//     if (cartItem.stock < 1) return toast.error("Out of stock");

//     dispatch(addToCart(cartItem));
//     toast.success("Added To Cart Successfully");
//   };

//   if (isError) toast.error("Cannot Fetch the Products");

//   return (
//     <div className="home">
//       <section>
//       </section>

//       <h1>
//         Latest Products
//         <Link to="/search" className="findmore">
//           More
//         </Link>
//       </h1>

//       <main>
//         {isLoading ? (
//           <Skeleton width="80vw" />
//         ) : (
//           data?.products.map((i) => (
//             <div key={i._id}>
//               <ProductCard
//                 productId={i._id}
//                 name={i.name}
//                 price={i.price}
//                 stock={i.stock}
//                 handler={addToCartHandler}
//                 photo={i.photo}
//               />
//             </div>
//           ))
//         )}
//       </main>
//     </div>
//   );
// };

// export default Home;

// test
import React from "react";

function Home() {
  
  return (
    <div className="App">
      {/* <Header /> */}
      <Hero />
      <Features />
      <Banner />
      <Products />
      <SmallBanner />
      {/*<BannerThree />*/}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
const Hero = () => {
  return (
    <section id="hero">
      <h4>Offers_are_here</h4>
      <h2>Paisa Vasul Deal</h2>
      <h1>On All Products</h1>
      <p>Save more with coupons "VIJAYtrade" up to 60%</p>
      <button>
        <Link to="/search" className="findmore">
          {" "}
          More{" "}
        </Link>
      </button>
    </section>
  );
};

const Features = () => {
  const features = [
    { img: "../images/f1.png", title: "Free Shipping" },
    { img: "../images/f2.png", title: "Online Order" },
    { img: "../images/f3.png", title: "Promotions" },
    { img: "../images/f4.png", title: "Happy Sell" },
    { img: "../images/f5.png", title: "Save Money" },
    { img: "../images/f6.png", title: "24/7 Support" },
  ];

  return (
    <section id="feature" className="section-p1">
      {features.map((feature, index) => (
        <div key={index} className="fe-box">
          <img src={feature.img} alt={feature.title} />
          <h6>{feature.title}</h6>
        </div>
      ))}
    </section>
  );
};

const Products = () => {
  const { data, isLoading, isError } = useLatestProductsQuery("");
  const dispatch = useDispatch();

  const addToCartHandler = (cartItem: CartItem) => {
    if (cartItem.stock < 1) return toast.error("Out of stock");

    dispatch(addToCart(cartItem));
    toast.success("Added To Cart Successfully");
  };

  if (isError) toast.error("Cannot Fetch the Products");
  return (
    <section id="product1" className="section-p1">
      <h2>Featured Products</h2>
      <p>Summer collection with modern designs</p>
      <div className="pro-container">
      {isLoading ? (
          <Skeleton width="80vw" />
        ) : (
          data?.products.map((i) => (
            <div key={i._id} className="container">
              <ProductCard
                productId={i._id}
                name={i.name}
                price={i.price}
                stock={i.stock}
                handler={addToCartHandler}
                photo={i.photo}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
};

const Banner = () => {
  return (
    <section id="banner" className="section-m1">
      <p>Repair service</p>
      <h2>
        Upto <span>70% Off</span> -All t-shirts & Assessories
      </h2>
      <button className="normal">Explore More</button>
    </section>
  );
};

const SmallBanner = () => {
  return (
    <section id="sm-banner" className="section-p1">
      <div className="banner-box">
        <h4>craziest_deals</h4>
        <h2>buy 2 get 1 free</h2>
        <span>Best classic collections for lovely people</span>
        <button className="white">Learn More</button>
      </div>
      <div className="banner-box2">
        <h4>craziest_deals</h4>
        <h2>buy 2 get 1 free</h2>
        <span>Best classic collections for lovely people</span>
        <button className="white">Learn More</button>
      </div>
    </section>
  );
};
const Newsletter = () => {
  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newtext">
        <h4>SIGN UP For Newsletter</h4>
        <p>
          Get E-mail updates about our latest shopand{" "}
          <span>special offers</span>
        </p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your E-mail address" />
        <button className="normal"> Sign Up</button>
      </div>
    </section>
  );
};
const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="col">
        <img className="logo" src="images/logo.png" alt="" />
        <h4>contact</h4>
        <p>
          <strong>Address:</strong> orai 285001
        </p>
        <p>
          <strong>contact:</strong> orai 285001
        </p>
        <p>
          <strong>Phone:</strong> orai 285001
        </p>
        <p>
          <strong>Duration:</strong>10:00-18:00 ,Mon-sat
        </p>
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
        <a href="#">About us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Contact us</a>
      </div>
      <div className="col">
        <h4>My Account</h4>
        <a href="#">Sign in</a>
        <a href="#">View Cart</a>
        <a href="#">Track Order</a>
        <a href="#">View cart</a>
      </div>
      <div className="col install">
        <h4>Install App</h4>
        <p>From App store or Google play</p>
        <div className="row">
          <img src="images/app.jpg" alt="" />
          <img src="images/play.jpg" alt="" />
        </div>
        <p>Secured Payment Gateways </p>
        <img src="images/pay.png" alt="" />
      </div>
    </footer>
  );
};

{
  /* <div className="pro">
          <img src="images/f1.jpg" alt="" />
          <div className="des">
            <span>Vijay_T-shirts</span>
            <h5>Astronut T-shirts</h5>
            <div className="star">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <h4>$78</h4>
          </div>
          <a href="#">
            <i className="fal fa-shopping-cart cart"></i>
          </a>
        </div> */
}

// <main>
//         {isLoading ? (
//           <Skeleton width="80vw" />
//         ) : (
//           data?.products.map((i) => (
//             <div key={i._id}>
//               <ProductCard
//                 productId={i._id}
//                 name={i.name}
//                 price={i.price}
//                 stock={i.stock}
//                 handler={addToCartHandler}
//                 photo={i.photo}
//               />
//             </div>
//           ))
//         )}
//       </main>

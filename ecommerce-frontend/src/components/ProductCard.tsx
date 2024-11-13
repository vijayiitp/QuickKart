import React from "react";
import { FaPlus } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { server } from "../redux/store";
import { CartItem } from "../types/types";

type ProductProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

function ProductCard({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductProps) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    handler({
      productId,
      price,
      name,
      photo,
      stock,
      quantity: 1,
    });
    navigate(`/ProductDetails/${productId}`);
  };
  const checkDetails = () => {
    navigate(`/ProductDetails/${productId}`);
  };
  return (
    <div className="pro">
      {/* <img src={`${server}/${photo}`} alt={name} />
      <div className="des">
        <p>{name}</p>
        <span>₹{price}</span>
      </div>
      <div>
        <button onClick={handleButtonClick}>
          <FaPlus />
        </button>
        <button onClick={checkDetails}>
          Add To Cart
        </button>
      </div> */}
      <div className="product-card">
        <img src={`${server}/${photo}`} alt={name} />
        <p>{name}</p>
        <span>₹{price}</span>
        <div>
          <button onClick={handleButtonClick}>
            <FaPlus />
          </button>
          <button onClick={checkDetails}>
            <CiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

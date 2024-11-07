import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/StaffCard.css";

const StaffCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Call the addToCart function to handle adding the product to the cart
    addToCart(product);

    // Navigate to the payment page
    navigate("/Payment");
  };

  return (
    <div className="staff-card">
      <h3 className="product-name">{product.productName}</h3>
      <p className="product-name">{product.category}</p>
      <p className="product-description">{product.description}</p>
      <p className="product-description">In Stock: {product.stockQuantity}</p>
      <p className="product-price">Price: Rs {product.price}</p>
      <button onClick={handleAddToCart} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default StaffCard;

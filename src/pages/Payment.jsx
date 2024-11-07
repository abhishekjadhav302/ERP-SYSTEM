import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../components/css/Payment.css";

const Payment = () => {
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();

  if (!product) {
    return <p>No product selected for payment.</p>;
  }

  const handleProceedToPayment = () => {
    // Retrieve existing history from local storage or initialize an empty array
    const paymentHistory =
      JSON.parse(localStorage.getItem("paymentHistory")) || [];

    alert("Your payment is successfull !");
    navigate("/product-list");

    // Add the current product to payment history
    const newPayment = {
      productName: product.productName,
      category: product.category,
      description: product.description,
      supplier: product.supplier,
      stockQuantity: product.stockQuantity,
      price: product.price,
      date: new Date().toLocaleString(), // Add a timestamp
    };

    // Save updated history to local storage
    paymentHistory.push(newPayment);
    localStorage.setItem("paymentHistory", JSON.stringify(paymentHistory));
  };

  return (
    <div className="payment-page">
      <h2>Payment Details</h2>
      <div className="product-details">
        <p>
          <strong>Product Name:</strong> {product.productName}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Supplier:</strong> {product.supplier}
        </p>
        <p>
          <strong>Stock:</strong> {product.stockQuantity}
        </p>
        <p>
          <strong>Price:</strong> Rs: {product.price}
        </p>
      </div>
      <button className="pay-button" onClick={handleProceedToPayment}>
        Proceed to Payment
      </button>
    </div>
  );
};

export default Payment;

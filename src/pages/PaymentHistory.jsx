import React, { useEffect, useState } from "react";
import "../components/css/PaymentHistory.css";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    // Retrieve payment history from local storage
    const storedHistory =
      JSON.parse(localStorage.getItem("paymentHistory")) || [];
    setPaymentHistory(storedHistory);
  }, []);

  if (paymentHistory.length === 0) {
    return <p>No payment history found.</p>;
  }

  return (
    <div className="payment-history-page">
      <h2>Payment History</h2>
      <ul className="payment-history-list">
        {paymentHistory.map((payment, index) => (
          <li key={index} className="payment-history-item">
            <p>
              <strong>Product Name:</strong> {payment.productName}
            </p>
            <p>
              <strong>Category:</strong> {payment.category}
            </p>
            <p>
              <strong>Description:</strong> {payment.description}
            </p>
            <p>
              <strong>Supplier:</strong> {payment.supplier}
            </p>
            <p>
              <strong>Stock:</strong> {payment.stockQuantity}
            </p>
            <p>
              <strong>Price:</strong> Rs: {payment.price}
            </p>
            <p>
              <strong>Date:</strong> {payment.date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;

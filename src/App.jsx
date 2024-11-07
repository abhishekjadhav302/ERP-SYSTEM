// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import StaffCard from "./components/StaffCard";
import Payment from "./pages/Payment";
import PaymentHistory from "./pages/PaymentHistory";
import Login from "./components/Login";
import Navbar from "./admin/src/components/Navbar";
import Home from "./admin/src/components/Home";
import NotificationStaff from "./components/NotificationStaff";
import Notification from "./admin/src/components/Notification";
// import ProductList from "./admin/src/components/ProductList";
import StaffDetails from "./admin/src/components/StaffDetails";
import EditProductForm from "./admin/src/components/EditProductForm";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/staff-card" element={<StaffCard />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/notification" element={<NotificationStaff />} />
        <Route path="/admin/Home.jsx" element={<Home />} />
        <Route path="/admin/Navbar" element={<Navbar />} />
        <Route path="/admin/Notification" element={<Notification />} />
        <Route path="/admin/StaffDetails" element={<StaffDetails />} />
        <Route path="/admin/EditProductForm" element={<EditProductForm />} />
        {/* <Route path="/admin/ProductList" element={<ProductList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

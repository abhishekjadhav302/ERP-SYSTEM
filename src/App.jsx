import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import ProductForm from "./admin/src/components/ProductForm";
import Admin_ProductList from "./admin/src/components/Admin_ProductList";
import StaffDetails from "./admin/src/components/StaffDetails";
import EditProductForm from "./admin/src/components/EditProductForm";
import PrivateRoute from "./components/PrivateRoute";
import "./admin/src/css/Home.css";

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

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/Navbar"
          element={
            <PrivateRoute>
              <Navbar />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/Notification"
          element={
            <PrivateRoute>
              <Notification />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/staff-details"
          element={
            <PrivateRoute>
              <StaffDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/ProductForm"
          element={
            <PrivateRoute>
              <ProductForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/EditProductForm"
          element={
            <PrivateRoute>
              <EditProductForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/Admin_ProductList"
          element={
            <PrivateRoute>
              <Admin_ProductList />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

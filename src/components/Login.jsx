import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check if credentials match the allowed admin credentials
    if (email === "abhishekjadhav0701@gmail.com" && password === "Abhi@123") {
      // here i use local storage to set admin authentication
      localStorage.setItem("isAdminAuthenticated", "true");

      // Clear error and navigate to the admin page or perform any success actions
      setErrorMessage("");
      alert("Login successful! Navigating to admin dashboard...");
      // Perform navigation if needed, e.g. navigate("/admin-dashboard");
      // navigate("/admin/product-list");
      navigate("/admin/Navbar");
    } else {
      // Set an error message if credentials are incorrect
      setErrorMessage("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Admin Login</h2>
      <input
        type="text"
        className="login-input"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="login-input"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className="login-button" onClick={handleLogin}>
        Login
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Login;

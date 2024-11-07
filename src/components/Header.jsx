import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import Login from "./login";
import "./css/Header.css";

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    if (onSearch) {
      onSearch(searchTerm); // Send search term to parent component
    } else {
      console.log("Search term:", searchTerm);
      navigate(`/product-list?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  // define the handleLoginClick
  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };

  return (
    <>
      <header className="header">
        <div className="header-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTohFwdU4sY3J7mARcwIlradG-A3ojX5-1dfA&usqp=CAU"
            alt="logo"
            className="header-icon"
          />
          <span className="header-title">Staff</span>
        </div>
        <div className="header-search">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="search-input"
          />
          <button className="search-btn" onClick={handleSearchClick}>
            <img
              src="https://w7.pngwing.com/pngs/223/719/png-transparent-money-back-guarantee-computer-icons-search-button-miscellaneous-service-internet-thumbnail.png"
              alt="search-icon"
              className="search-icon"
            />
          </button>
        </div>
      </header>
      <aside className="sidebar">
        <nav className="sidebar-links">
          <Link to="/product-list" className="sidebar-link">
            Home
          </Link>
          <Link to="/notification" className="sidebar-link">
            Notification
          </Link>
          <Link to="/payment-history" className="sidebar-link">
            Pay History
          </Link>
          <button onClick={handleLoginClick} className="admin-btn">
            Admin
          </button>
        </nav>
      </aside>
    </>
  );
};

export default Header;

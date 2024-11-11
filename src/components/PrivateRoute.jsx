import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAdminAuthenticated =
    localStorage.getItem("isAdminAuthenticated") === "true";
  return isAdminAuthenticated ? children : <Navigate to="/Login" />;
};

export default PrivateRoute;

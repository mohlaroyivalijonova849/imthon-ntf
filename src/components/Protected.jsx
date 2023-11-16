import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected = ({ children }) => {
  const token = localStorage.getItem("token");

  return token ? <>{children}</> : <Navigate to="/login" />;
};

export default Protected;

import React, { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useLocation, Navigate } from "react-router-dom";

const Private = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <p>loading....</p>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default Private;

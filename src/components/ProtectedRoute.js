import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ requiredRole, children }) => {
  // Fetch the user type from localStorage (or context if implemented)
  const userType = localStorage.getItem('userType');

  // If userType matches the required role, render the children components
  if (userType === requiredRole) {
    return children;
  }

  // Otherwise, redirect to login page (or an unauthorized page)
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;

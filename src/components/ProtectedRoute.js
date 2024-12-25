import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ requiredRole, children }) => {
  // Fetch the user type from localStorage (or context if implemented)
  const userRole = localStorage.getItem('userRole');

  // If userRole matches the required role, render the children components
  if (userRole === requiredRole) {
    return children;
  }

  // Otherwise, redirect to login page (or an unauthorized page)
  return <Navigate to="/" replace />;
};

export default ProtectedRoute;

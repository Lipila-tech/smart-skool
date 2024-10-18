import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

// import  Parent components
import ParentDashboard from "./components/Parents/ParentDashboard";
import PaymentHistory from "./components/Parents/PaymentHistory";
import StudentProgress from "./components/Parents/StudentProgress";
import MakePayment from "./components/Parents/MakePayment";
import Profile from "./components/Parents/Profile";
import Communication from "./components/Parents/Communication";

// import School components
import AdminDashboard from "./components/School/AdminDashboard";
import PaymentManagement from "./components/School/PaymentManagement";
import AddStudent from "./components/School/AddStudent";
import ManageStudents from "./components/School/ManageStudents";
import TeacherManagement from "./components/School/TeacherManagement";
import ClassManagement from "./components/School/ClassManagement";
import Announcements from "./components/School/Announcements";



function App() {
  
  return (
    <Router basename="/gh-pages">
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          
          {/* Parent Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute requiredRole="parent">
                <ParentDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/make-payment" 
            element={
              <ProtectedRoute requiredRole="parent">
                <MakePayment />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/payment-history" 
            element={
              <ProtectedRoute requiredRole="parent">
                <PaymentHistory />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/student-progress" 
            element={
              <ProtectedRoute requiredRole="parent">
                <StudentProgress />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute requiredRole="parent">
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/communication" 
            element={
              <ProtectedRoute requiredRole="parent">
                <Communication />
              </ProtectedRoute>
            } 
          />
          
          {/* Admin Routes */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/payment-management" 
            element={
              <ProtectedRoute requiredRole="admin">
                <PaymentManagement />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/add-student" 
            element={
              <ProtectedRoute requiredRole="admin">
                <AddStudent />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/manage-students" 
            element={
              <ProtectedRoute requiredRole="admin">
                <ManageStudents />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/teacher-management" 
            element={
              <ProtectedRoute requiredRole="admin">
                <TeacherManagement />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/class-management" 
            element={
              <ProtectedRoute requiredRole="admin">
                <ClassManagement />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/announcements" 
            element={
              <ProtectedRoute requiredRole="admin">
                <Announcements />
              </ProtectedRoute>
            } 
          />
          
          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

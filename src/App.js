import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Logout
 from "./components/logout";
// Import Parent Components
import ParentDashboard from "./components/Parents/ParentDashboard";
import PaymentHistory from "./components/Parents/PaymentHistory";
import StudentProgress from "./components/Parents/StudentProgress";
import MakePayment from "./components/Parents/MakePayment";
import Profile from "./components/Parents/Profile";
import Communication from "./components/Parents/Communication";

// Import School Admin Components
import AdminDashboard from "./components/School/AdminDashboard";
import PaymentManagement from "./components/School/PaymentManagement";
import AddStudent from "./components/School/AddStudent";
import ManageStudents from "./components/School/ManageStudents";
import TeacherManagement from "./components/School/TeacherManagement";
import ClassManagement from "./components/School/ClassManagement";
import Announcements from "./components/School/Announcements";
import Header from "./components/common/header";
import AddUser from "./components/School/AddUser";


function App() {
  const schoolId = localStorage.getItem('schoolId'); // Retrieve schoolId from localStorage
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="logout" element={<Logout />} />

          {/* Parent Dashboard with Nested Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute requiredRole="parent">
                <ParentDashboard />
              </ProtectedRoute>
            }
          >
            {/* Nested routes for ParentDashboard */}
            <Route path="make-payment" element={<MakePayment />} />
            <Route path="payment-history" element={<PaymentHistory />} />
            <Route path="student-progress" element={<StudentProgress />} />
            <Route path="profile" element={<Profile />} />
            <Route path="communication" element={<Communication />} />
            <Route path="logout" element={<Logout/>}/>
          </Route>

          {/* Admin Dashboard with Nested Routes */}
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard schoolId={schoolId} />
              </ProtectedRoute>
            }
          >
            {/* Nested routes for AdminDashboard */}
            <Route path="payment-management" element={<PaymentManagement />} />
            <Route path="add-student" element={<AddStudent schoolId={schoolId}/>} />
            <Route path="add-user" element={<AddUser schoolId={schoolId}/>} />
            <Route path="manage-students" element={<ManageStudents schoolId={schoolId}/>} />
            <Route path="teacher-management" element={<TeacherManagement />} />
            <Route path="class-management" element={<ClassManagement schoolId={schoolId}/>} />
            <Route path="announcements" element={<Announcements />} />
            <Route path="logout" element={<Logout/>}/>
          </Route>

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

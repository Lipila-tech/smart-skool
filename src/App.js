import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import AddUser from "./components/School/AddUser";
import RootUserLogin from "./components/RootUserLogin";
import MemberUserLogin from "./components/MemberUserLogin";
import Register from "./components/Register";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Solutions from "./components/Solutions";

function App() {
  const schoolId = localStorage.getItem('schoolId');
  const userId = localStorage.getItem('userId');
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/root-login" element={<RootUserLogin />} />
        <Route path="/member-login" element={<MemberUserLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
          
          {/* Parent Dashboard with Nested Routes */}
          <Route
            path="/member/dashboard"
            element={
              <ProtectedRoute requiredRole="sponsor">
                <ParentDashboard userId={userId}/>
              </ProtectedRoute>
            }
          >
            {/* Nested routes for ParentDashboard */}
            <Route path="make-payment" element={<MakePayment userId={userId}/>} />
            <Route path="payment-history" element={<PaymentHistory userId={userId} />} />
            <Route path="student-progress" element={<StudentProgress userId={userId}/>} />
            <Route path="profile" element={<Profile userId={userId}/>} />
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

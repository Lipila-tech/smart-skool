import React, { useState } from "react";
import "../css/profile.css";

function Profile() {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="tab-content">
            <h3>Overview</h3>
            <p>This section provides an overview of the parent’s profile, including their profile picture and basic details.</p>
          </div>
        );
      case "contact":
        return (
          <div className="tab-content">
            <h3>Contact Information</h3>
            <p>Address: CC3 Lunda Road, Cha Cha Cha, Kitwe</p>
            <p>Phone Number: 0968736939</p>
            <p>Alternate Contact: Barnny - 0951049030</p>
          </div>
        );
      case "recentActivity":
        return (
          <div className="tab-content">
            <h3>Recent Activity</h3>
            <p>Recent actions like payments and communications.</p>
          </div>
        );
      case "enrollment":
        return (
          <div className="tab-content">
            <h3>Student Enrollment Details</h3>
            <p>Enrollment Status: Enrolled</p>
            <p>Classroom: Grade 4, Teacher: Ms. Banda</p>
          </div>
        );
      case "paymentInfo":
        return (
          <div className="tab-content">
            <h3>Payment Information</h3>
            <p>Outstanding Balance: K2000</p>
            <p>Saved Payment Methods: Visa ****1234</p>
          </div>
        );
      case "attendance":
        return (
          <div className="tab-content">
            <h3>Attendance Records</h3>
            <p>Monthly Attendance: 95%</p>
            <p>Days Missed: 3</p>
          </div>
        );
      case "settings":
        return (
          <div className="tab-content">
            <h3>Settings and Preferences</h3>
            <p>Change Password, Privacy Settings, Language Preferences.</p>
          </div>
        );
      case "achievements":
        return (
          <div className="tab-content">
            <h3>Student Achievements</h3>
            <p>Awards and extracurricular activities.</p>
          </div>
        );
      case "communication":
        return (
          <div className="tab-content">
            <h3>Parent-Teacher Communication</h3>
            <p>Recent messages with teachers.</p>
          </div>
        );
      case "feedback":
        return (
          <div className="tab-content">
            <h3>Feedback</h3>
            <p>Form to submit feedback on school and child’s experience.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-pic">
          <p>P</p>
        </div>
        <h2>Parent Profile</h2>
      </div>
      <div className="tabs">
        {[
          { key: "overview", label: "Overview" },
          { key: "contact", label: "Contact Info" },
          { key: "recentActivity", label: "Recent Activity" },
          { key: "enrollment", label: "Enrollment Details" },
          { key: "paymentInfo", label: "Payment Info" },
          { key: "attendance", label: "Attendance" },
          { key: "settings", label: "Settings" },
          { key: "achievements", label: "Achievements" },
          { key: "communication", label: "Communication" },
          { key: "feedback", label: "Feedback" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={activeTab === tab.key ? "active" : ""}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content-container">{renderContent()}</div>
    </div>
  );
}

export default Profile;

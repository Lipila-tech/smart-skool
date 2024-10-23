import React from "react";
import "../css/studentProgress.css";

function StudentProgress() {
  const reportCards = [
    { subject: "Math", grade: "A", comments: "Excellent performance" },
    { subject: "Science", grade: "B", comments: "Good understanding" },
    { subject: "English", grade: "A-", comments: "Great improvement" },
  ];

  const attendance = [
    { date: "2024-10-01", status: "Present" },
    { date: "2024-10-02", status: "Absent" },
    { date: "2024-10-03", status: "Present" },
  ];

  return (
    <div className="student-progress-container">
      <h2>Student Progress</h2>

      <div className="student-progress-section">
        <h3>Report Cards</h3>
        <table className="student-progress-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {reportCards.map((report, index) => (
              <tr key={index}>
                <td>{report.subject}</td>
                <td>{report.grade}</td>
                <td>{report.comments}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="student-progress-section">
        <h3>Attendance</h3>
        <table className="student-progress-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record, index) => (
              <tr key={index}>
                <td>{record.date}</td>
                <td>{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentProgress;

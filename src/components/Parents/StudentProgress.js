import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/studentProgress.css";
import { Tabs, Tab } from "react-bootstrap"; // Import Tabs and Tab from React Bootstrap

function StudentProgress() {
  const [progressData, setProgressData] = useState(null);
  const [error, setError] = useState(null);
  const parentId = "P12345"; // Example parent ID (this could come from authentication data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch parent and student data
        const parentResponse = await fetch("/data/sample-parent-data.json");
        const userResponse = await fetch("/data/sample-student-data.json");

        if (!parentResponse.ok || !userResponse.ok) {
          throw new Error("Failed to fetch data");
        }

        const parentData = await parentResponse.json();
        const studentData = await userResponse.json();

        // Find parent data
        const parent = parentData.find((p) => p.parentId === parentId);
        if (!parent) {
          throw new Error("Parent data not found");
        }

        // Find students linked to the parent
        const studentIds = parent.students;
        const students = studentData.filter((user) => studentIds.includes(user.studentId));

        if (students.length === 0) {
          throw new Error("No student data available");
        }

        // Extract progress data
        const progress = students.map((student) => ({
          name: student.name,
          performance: student.performance,
          attendance: student.attendance,
        }));

        setProgressData(progress);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, [parentId]);

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!progressData) {
    return <div className="loading-message">Loading student progress...</div>;
  }

  return (
    <div className="student-progress-container">
      <h2>Student Progress</h2>
      <Tabs defaultActiveKey={progressData[0]?.name} id="student-tabs" className="mb-3">
        {progressData.map((student, index) => (
          <Tab key={index} eventKey={student.name} title={student.name}>
            <div className="student-section">
              {/* Performance Data */}
              <div className="student-progress-section">
                <h4>Report Cards</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Grade</th>
                        <th>Comments</th>
                      </tr>
                    </thead>
                    <tbody>
                      {student.performance.map((report, idx) => (
                        <tr key={idx}>
                          <td>{report.subject}</td>
                          <td>{report.grade}</td>
                          <td>{report.comments}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Attendance Data */}
              <div className="student-progress-section">
                <h4>Attendance</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {student.attendance.map((record, idx) => (
                        <tr key={idx}>
                          <td>{record.date}</td>
                          <td>
                            <span
                              className={`status-badge ${
                                record.status.toLowerCase() === "present"
                                  ? "present"
                                  : "absent"
                              }`}
                            >
                              {record.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}

export default StudentProgress;

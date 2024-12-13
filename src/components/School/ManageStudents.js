import React, { useState, useEffect } from "react";
import axiosInstance from '../../api/axios';


function ManageStudents({ schoolId }) {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [classRooms, setClassRooms] = useState([]);
  const [sponsors, setSponsors] = useState([]);

  // Fetch classes from the API
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosInstance.get(
          `/schools/${schoolId}/students/`
        );
        setClassRooms(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, [schoolId]);

  // Fetch sponsor from the API
  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axiosInstance.get(
          `/schools/${schoolId}/sponsor/users/`
        );
        setSponsors(response.data);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };

    fetchSponsors();
  }, [schoolId]);

  // Fetch students from API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axiosInstance.get(`/schools/${schoolId}/students/`);
        setStudents(response.data);
        setFilteredStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
      }
    };

    fetchStudents();
  }, [schoolId]);


  // Handle search input
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFilteredStudents(
      students.filter((student) =>
        [
          student.firstname.toLowerCase(),
          student.lastname.toLowerCase(),
          student.classroom?.toLowerCase() || "", // Handle null classroom
          student.sponsor.toLowerCase(),
        ].some((field) => field.includes(term))
      )
    );
  };

  // Open edit modal
  const openEditModal = (student) => {
    setSelectedStudent(student);
    setShowEditModal(true);
  };

  // Close edit modal
  const closeEditModal = () => {
    setSelectedStudent(null);
    setShowEditModal(false);
  };

  return (
    <div style={styles.container}>
      <h2>Manage Students</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by firstname, lastname, classroom, or sponsor"
        value={searchTerm}
        onChange={handleSearch}
        style={styles.searchInput}
      />

      {/* Students Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Names</th>
            <th>Tuition(ZMW)</th>
            <th>Sex</th>
            <th>Classroom</th>
            <th>Sponsor</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{student.fullname}</td>
              <td>{student.tuition || "N/A"} </td>
              <td>{student.sex}</td>
              <td>{student.classroom || "N/A"}</td>
              <td>{student.sponsor || "N/A"}</td>
              <td>{student.dob}</td>
              <td>
                <button
                  onClick={() => openEditModal(student)}
                  style={styles.editButton}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {showEditModal && selectedStudent && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <h3>Edit Student</h3>
            <label>
              Firstname:
              <input
                type="text"
                value={selectedStudent.firstname}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    firstname: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Lastname:
              <input
                type="text"
                value={selectedStudent.lastname}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    lastname: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Tuition:
              <input
                type="number"
                value={selectedStudent.tuition}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    tuition: e.target.value,
                  })
                }
              />
            </label>
            <label>
              Classroom:
              <select
                name="classroom"
                value={selectedStudent.classroom || ""}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    classroom: e.target.value,
                  })
                }
                className=""
              >
                <option value="" disabled>
                  Select a class
                </option>
                {classRooms.map((classroom) => (
                  <option key={classroom.id} value={classroom.id}>
                    {`${classroom.name} - ${classroom.grade}`}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Sponsor:
              <select
                name="sponsor"
                value={selectedStudent.sponsor}
                onChange={(e) =>
                  setSelectedStudent({
                    ...selectedStudent,
                    sponsor: e.target.value,
                  })
                }
                required
                className="s"
              >
                <option value="" disabled>
                  Select a sponsor
                </option>
                {sponsors.map((sponsor) => (
                  <option key={sponsor.user_id} value={sponsor.user_id}>
                    {`${sponsor.firstname} ${sponsor.lastname}`}
                  </option>
                ))}
              </select>
            </label>

            <button onClick={closeEditModal} style={styles.closeButton}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  searchInput: {
    marginBottom: "20px",
    padding: "10px",
    width: "100%",
    fontSize: "16px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  editButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
  },
  closeButton: {
    marginTop: "20px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default ManageStudents;

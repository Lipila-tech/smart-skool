import React, { useEffect, useState } from "react";
import "../css/addStudent.css";
import axiosInstance from '../../api/axios';

function AddStudent({ schoolId }) {
  const [form, setForm] = useState({
    name: "",
    age: "",
    classroom: "",
    sponsor: "",
  });

  const [classRooms, setClassRooms] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newSponsor, setNewSponsor] = useState("");

  // Fetch classes from the API
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axiosInstance.get(
          `/schools/${schoolId}/classrooms/`
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSponsorChange = (e) => {
    setForm({ ...form, sponsor: e.target.value });
  };

  const handleClassroomChange = (e) => {
    setForm({ ...form, classroom: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/admin/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add student");
        }
        return response.json();
      })
      .then(() => {
        alert("Student added successfully!");
        setForm({ name: "", age: "", class: "", sponsor: "" });
      })
      .catch((error) => {
        console.error("Error adding student:", error);
        alert("There was an error adding the student.");
      });
  };

  const handleAddSponsor = () => {
    if (newSponsor.trim()) {
      setSponsors([...sponsors, newSponsor]);
      setNewSponsor("");
      setShowModal(false);
    } else {
      alert("Please enter a sponsor name.");
    }
  };

  return (
    <div className="add-student-container">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} className="add-student-form">
        <label className="form-label">
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          D.O.B:
          <input
            type="number"
            name="dob"
            value={form.age}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Class:
          <div className="sponsor-container">
            <select
              name="classroom"
              value={form.classroom}
              onChange={handleClassroomChange}
              required
              className="form-input"
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
          </div>
        </label>
        <label className="form-label">
          Sponsor:
          <div className="sponsor-container">
            <select
              name="sponsor"
              value={form.sponsor}
              onChange={handleSponsorChange}
              required
              className="form-input"
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
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="form-button"
            >
              Add Sponsor
            </button>
          </div>
        </label>
        <button type="submit" className="form-button">
          Add Student
        </button>
      </form>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Add New Sponsor</h3>
            <input
              type="text"
              value={newSponsor}
              onChange={(e) => setNewSponsor(e.target.value)}
              placeholder="Enter sponsor first name"
              className="form-input"
            />
            <div className="modal-actions">
              <button onClick={handleAddSponsor} className="form-button">
                Add
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="form-button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddStudent;

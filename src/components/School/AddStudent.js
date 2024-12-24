import React, { useEffect, useState } from "react";
import "../css/addStudent.css";
import axiosInstance from '../../api/axios';

function AddStudent({ schoolId }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
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
          First Name:
          <input
            type="text"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            required
            placeholder="First name"
            className="form-input"
          />
        </label>
        <label className="form-label">
          Last Name:
          <input
            type="text"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            required
            placeholder="Last name"
            className="form-input"
          />
        </label>
        <label className="form-label">
          D.O.B:
          <input
            type="date"
            name="dob"
            value={form.age}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Assign Class:
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
          Select Sponsor:
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
              + New Sponsor
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
            <h3>Create New Sponsor</h3>
            <label className="form-label"> Sponsor Names:
              <input
                type="text"
                value={newSponsor}
                onChange={(e) => setNewSponsor(e.target.value)}
                placeholder="Firstname Lastname"
                className="form-input"
              />
            </label>
            <label className="form-label"> Sponsor Mobile#:
              <input
                type="text"
                value={newSponsor}
                onChange={(e) => setNewSponsor(e.target.value)}
                placeholder="0975443322"
                className="form-input"
              />
            </label>
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

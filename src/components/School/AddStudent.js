import React, { useState } from "react";
import "../css/addStudent.css"; 

function AddStudent() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    class: "",
    parentEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your actual API endpoint
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
      .then((data) => {
        alert("Student added successfully!");
        setForm({ name: "", age: "", class: "", parentEmail: "" });
      })
      .catch((error) => {
        console.error("Error adding student:", error);
        alert("There was an error adding the student.");
      });
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
          Age:
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Class:
          <input
            type="text"
            name="class"
            value={form.class}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Parent Email:
          <input
            type="email"
            name="parentEmail"
            value={form.parentEmail}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <button type="submit" className="form-button">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;

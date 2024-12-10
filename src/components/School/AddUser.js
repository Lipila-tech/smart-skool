import React, { useState } from "react";
import "../css/addUser.css"; // Add styles specific to this component

function AddUser({schoolId}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
  });

  const roles = ["Admin", "Teacher", "Staff", "Sponsor"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/admin/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add user");
        }
        return response.json();
      })
      .then(() => {
        alert("User added successfully!");
        setForm({ name: "", email: "", role: "" });
      })
      .catch((error) => {
        console.error("Error adding user:", error);
        alert("There was an error adding the user.");
      });
  };

  return (
    <div className="add-user-container">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit} className="add-user-form">
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
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </label>
        <label className="form-label">
          Role:
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            required
            className="form-input"
          >
            <option value="" disabled>
              Select a role
            </option>
            {roles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className="form-button">
          Add User
        </button>
      </form>
    </div>
  );
}

export default AddUser;

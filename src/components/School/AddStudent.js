// src/components/admin/AddStudent.js
import React, { useState } from "react";

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
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to add student");
        }
        return response.json();
      })
      .then(data => {
        alert("Student added successfully!");
        setForm({ name: "", age: "", class: "", parentEmail: "" });
      })
      .catch(error => {
        console.error("Error adding student:", error);
        alert("There was an error adding the student.");
      });
  };

  return (
    <div style={styles.container}>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label>
          Class:
          <input
            type="text"
            name="class"
            value={form.class}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <label>
          Parent Email:
          <input
            type="email"
            name="parentEmail"
            value={form.parentEmail}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </label>
        <button type="submit" style={styles.button}>Add Student</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
  },
  input: {
    margin: "5px 0 15px 0",
    padding: "8px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default AddStudent;

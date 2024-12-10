import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ClassManagement({ schoolId }) {
  const [classes, setClasses] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // For success message
  const [newClass, setNewClass] = useState({
    name: '',
    grade: '',
    teacher: '',
    tuition_fee: '',
  });

  // Fetch classes from the API
  useEffect(() => {
    const fetchClasses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/smartskool/class-management/all/${schoolId}/`
        );
        setClasses(response.data);
      } catch (error) {
        console.error('Error fetching classes:', error);
      }
    };

    fetchClasses();
  }, [schoolId]);

  // Handle creating a new class
  const handleCreateClass = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8000/smartskool/class-management/${schoolId}/create/`,
        newClass,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setClasses((prevClasses) => [...prevClasses, response.data]);
      setSuccessMessage('Class created successfully!'); // Show success message
      setTimeout(() => setSuccessMessage(''), 10000); // Clear message after 3 seconds
      setShowCreateModal(false);
      setNewClass({ name: '', grade: '', teacher: '', tuition_fee: '' });
    } catch (error) {
      console.error('Error creating class:', error);
    }
  };

  // Handle opening and closing the modal
  const toggleCreateModal = () => {
    setShowCreateModal((prev) => !prev);
  };

  return (
    <div>
      <h1>Class Management</h1>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      <button onClick={toggleCreateModal} style={{ float: 'right' }}>
        Create New Class
      </button>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>#</th>
            <th>Class Name</th>
            <th>Grade</th>
            <th>Teacher</th>
            <th>Tuition</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((cls) => (
            <tr key={cls.id}>
              <td>{cls.id}</td>
              <td>{cls.name || 'N/A'}</td>
              <td>{cls.grade || 'N/A'}</td>
              <td>{cls.teacher || 'N/A'}</td>
              <td>{cls.tuition_fee || 'N/A'}</td>
              <td>
                <button onClick={() => alert(`Edit class: ${cls.name}`)}>
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showCreateModal && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'white',
            padding: '20px',
            border: '1px solid black',
          }}
        >
          <h2>Create New Class</h2>
          <input
            type="text"
            placeholder="Class Name"
            value={newClass.name}
            onChange={(e) =>
              setNewClass((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Grade"
            value={newClass.grade}
            onChange={(e) =>
              setNewClass((prev) => ({ ...prev, grade: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Teacher"
            value={newClass.teacher}
            onChange={(e) =>
              setNewClass((prev) => ({ ...prev, teacher: e.target.value }))
            }
          />
          <input
            type="number"
            placeholder="Tuition"
            value={newClass.tuition_fee}
            onChange={(e) =>
              setNewClass((prev) => ({ ...prev, tuition_fee: e.target.value }))
            }
          />
          <br />
          <button onClick={handleCreateClass}>Save</button>
          <button onClick={toggleCreateModal}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default ClassManagement;
